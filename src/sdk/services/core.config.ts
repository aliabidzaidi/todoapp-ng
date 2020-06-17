import { environment } from '../../environments/environment';

export class CoreConfig {
  public static getPath(): string {
    return environment.path;
  }

  public static getSocketPath(): string {
    return environment.socketPath;
  }

  public static getVirusApiPath(): string{
    return environment.virusApiPath;
  }
}
