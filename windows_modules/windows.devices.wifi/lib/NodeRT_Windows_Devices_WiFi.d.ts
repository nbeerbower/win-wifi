declare module "windows.devices.wifi" {
  export enum WiFiNetworkKind {
    any,
    infrastructure,
    adhoc,
  }

  export enum WiFiPhyKind {
    unknown,
    fhss,
    dsss,
    iRBaseband,
    ofdm,
    hrdsss,
    erp,
    hT,
    vht,
    dmg,
  }

  export enum WiFiAccessStatus {
    unspecified,
    allowed,
    deniedByUser,
    deniedBySystem,
  }

  export enum WiFiReconnectionKind {
    automatic,
    manual,
  }

  export enum WiFiConnectionStatus {
    unspecifiedFailure,
    success,
    accessRevoked,
    invalidCredential,
    networkNotAvailable,
    timeout,
    unsupportedAuthenticationProtocol,
  }

  export class WiFiAdapter {
    networkAdapter: Object;
    networkReport: WiFiNetworkReport;
    constructor();

    static findAllAdaptersAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: WiFiAdapter) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: WiFiAccessStatus) => void): void ;


    static getDeviceSelector(): String;


    scanAsync(callback: (error: Error) => void): void ;

    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, callback: (error: Error, result: WiFiConnectionResult) => void): void ;
    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, passwordCredential: Object, callback: (error: Error, result: WiFiConnectionResult) => void): void ;
    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, passwordCredential: Object, ssid: String, callback: (error: Error, result: WiFiConnectionResult) => void): void ;

    disconnect(): void;

    addListener(type: "AvailableNetworksChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AvailableNetworksChanged", listener: (ev: Event) => void): void ;
    on(type: "AvailableNetworksChanged", listener: (ev: Event) => void): void ;
    off(type: "AvailableNetworksChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WiFiNetworkReport {
    availableNetworks: Object;
    timestamp: Date;
    constructor();

  }

  export class WiFiAvailableNetwork {
    beaconInterval: Number;
    bssid: String;
    channelCenterFrequencyInKilohertz: Number;
    isWiFiDirect: Boolean;
    networkKind: WiFiNetworkKind;
    networkRssiInDecibelMilliwatts: Number;
    phyKind: WiFiPhyKind;
    securitySettings: Object;
    signalBars: Number;
    ssid: String;
    uptime: Number;
    constructor();

  }

  export class WiFiConnectionResult {
    connectionStatus: WiFiConnectionStatus;
    constructor();

  }

}



