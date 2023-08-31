import {IInstructions, IPoint} from '../../interfaces/map.interface';
import {mallBase, mallFirst} from './zones';
import {mallBaseMapping, mallFirstMapping} from './mapping';
const pathFinding = require('pathfinding');

export function detectZone(userX: number, userY: number, floor: number) {
  const zone = !!!floor ? mallBase : mallFirst;
  for (let i = 0; i < zone.length; i++) {
    const {area} = zone[i];
    for (let j = 0; j < area.length; j++) {
      //Zona inici àrea respecte eix x
      const initZoneX = area[j].x;
      //Zona fi àrea respecte eix x (inici + amplada de la zona = final)
      const finalZoneX = initZoneX + area[j].width;
      //Zona inici àrea respecte eix y
      const initZoneY = area[j].y;
      //Zona fi àrea respecte eix x (inici + alçada de la zona = final)
      const finalZoneY = initZoneY + area[j].height;

      //Si les coordenades X de l'usuari es troben entre les coordenades
      //inici/final de la zona
      if (userX >= initZoneX && userX <= finalZoneX) {
        //Si les coordenades de l'usuari a més d'estar dins les X de la zona,
        //també es troben entre les coordenades Y de la zona
        if (userY >= initZoneY && userY <= finalZoneY) return zone[i];
      }
    }
  }
  return null;
}

export function pathBetweenFloors(
  start: IPoint,
  goal: IPoint,
  currentFloor: number,
  goalFloor: number,
) {
  const zones = !!!currentFloor ? mallBase : mallFirst;
  const stairs = zones.filter(
    item =>
      item.name.toLowerCase().includes('stair') ||
      item.name.toLowerCase().includes('elevator'),
  );

  let currentFloorPath = {
    path: [],
    instructions: [],
  };
  let x = -1,
    y = -1;
  let minDist = 100000;
  for (let i = 0; i < stairs.length; i++) {
    const coordX = stairs[i].area[0].x + stairs[i].area[0].width / 2;
    const coordY = stairs[i].area[0].y + stairs[i].area[0].height / 2;
    const newPath = getPathWithA(start, {x: coordX, y: coordY}, currentFloor);

    let totalDist = 0;
    for (let j = 0; j < newPath.instructions.length; j++) {
      totalDist += newPath.instructions[j].distance;
    }

    if (totalDist < minDist) {
      minDist = totalDist;
      currentFloorPath = newPath;
      x = coordX;
      y = coordY;
    }
  }
  const nextFloorPath = getPathWithA({x, y}, goal, goalFloor);
  return [currentFloorPath, nextFloorPath];
}

export function getPathWithA(start: IPoint, goal: IPoint, floor: number) {
  const relation = 2.5;
  start = {
    x: Math.ceil(Math.floor(start.x) / relation),
    y: Math.ceil(Math.floor(start.y) / relation),
  };
  goal = {
    x: Math.ceil(Math.floor(goal.x) / relation),
    y: Math.ceil(Math.floor(goal.y) / relation),
  };

  const matrix = !!!floor ? mallBaseMapping : mallFirstMapping;
  let grid = new pathFinding.Grid(JSON.parse(matrix));
  let finder = new pathFinding.AStarFinder({
    allowDiagonal: true,
    dontCrossCorners: true,
    heuristic: pathFinding.Heuristic.chebyshev,
  });
  let path = finder.findPath(start.x, start.y, goal.x, goal.y, grid);
  if (!!!path) return;
  const formattedPath: IPoint[] = path.map(item => {
    return {x: item[0] * relation, y: item[1] * relation};
  });
  const instructions: IInstructions[] | null =
    generateDirections(formattedPath);
  return {path: formattedPath, instructions};
}

function generateDirections(path: IPoint[]) {
  if (!path || path.length < 2) return null;

  const directionNames = [
    'north',
    'northw',
    'west',
    'southw',
    'south',
    'southe',
    'east',
    'northe',
  ];

  let instructions: IInstructions[] = [];

  let currentDirection = getDirection(path[0], path[1]);
  let currentDistance = getDistance(path[0], path[1]);
  let lastPoint: IPoint = path[0];

  for (let i = 1; i < path.length; i++) {
    const prevPoint = path[i - 1];
    const currentPoint = path[i];

    const direction = getDirection(prevPoint, currentPoint);
    const distance = getDistance(prevPoint, currentPoint);

    if (direction !== currentDirection) {
      if (currentDistance > 0) {
        instructions.push({
          point: lastPoint,
          distance: currentDistance,
          direction: directionNames[currentDirection],
        });
      }
      currentDirection = direction;
      currentDistance = distance;
      lastPoint = currentPoint;
    } else {
      currentDistance += distance;
    }
  }

  if (currentDistance > 0) {
    instructions.push({
      point: lastPoint,
      distance: currentDistance,
      direction: directionNames[currentDirection],
    });
  }
  return instructions;
}

function getDirection(point1: IPoint, point2: IPoint) {
  const dx = point2.x - point1.x;
  const dy = point2.y - point1.y;

  if (dx === 0) return dy > 0 ? 4 : 0; // South or North
  else if (dy === 0) return dx > 0 ? 6 : 2; // East or West

  if (dx > 0) return dy > 0 ? 5 : 7; // Southeast or Northeast
  else return dy > 0 ? 3 : 1; // Southwest or Northwest
}

function getDistance(point1: IPoint, point2: IPoint) {
  const pixelDistance = Math.sqrt(
    Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2),
  );
  const realDistance = pixelDistance / 4;
  return realDistance;
}

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));