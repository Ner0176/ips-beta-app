import { PropsWithChildren, createContext, useState } from "react";
import { IEndpoint } from "../interfaces/endpoint.interface";
import { detectZone } from "../assets/utils/functions";

const initEndpoint: IEndpoint = {
  x: -10,
  y: -10,
  UIName: "",
  zoneName: "",
  enabled: false,
  floor: 0,
};

export const EndpointContext = createContext({
  endpoint: initEndpoint,
  handleEndpointStatus: () => {},
  updateEndpoint: (
    endpointX: number,
    endpointY: number,
    endpointFloor: number,
    enabled?: boolean
  ) => {},
});

const EndpointProvider = ({ children }: PropsWithChildren) => {
  const [endpoint, setEndpoint] = useState<IEndpoint>(initEndpoint);

  function handleEndpointStatus() {
    /**
     * Si el endpoint está habilitado, significa que al haber clicado otra vez
     * se ha ejecutado esta función y ahora toca cambiarle el estado a false,
     * por lo que ya se le puede hacer un reset completo para borrar también las
     * coordenadas pulsadas antes y que así no aparezcan cuando se vuelva a activar.
     * En caso de que esté deshabilitado significará que se tiene que habilitar
     */
    if (endpoint.enabled) setEndpoint(initEndpoint);
    else setEndpoint({ ...endpoint, enabled: !!!endpoint.enabled });
  }

  function updateEndpoint(
    endpointX: number,
    endpointY: number,
    endpointFloor: number,
    enabled?: boolean
  ) {
    let zone = detectZone(endpointX, endpointY, endpointFloor);
    if(!!!zone) return;
    const newEndpoint: IEndpoint = {
      x: endpointX,
      y: endpointY,
      enabled: !!!enabled ? endpoint.enabled : enabled,
      UIName: !!!zone ? "" : zone.UIName,
      zoneName: !!!zone ? "" : zone.name,
      floor: endpointFloor
    };
    setEndpoint(newEndpoint);
  }

  const params = {
    endpoint,
    handleEndpointStatus,
    updateEndpoint,
  };

  return (
    <EndpointContext.Provider value={params}>
      {children}
    </EndpointContext.Provider>
  );
};

export default EndpointProvider;
