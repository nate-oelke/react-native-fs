import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  RNFSFileTypeRegular: any;
  RNFSFileTypeDirectory: any;

  stat(path: string): Promise<any>;
  readFile(path: string): Promise<any>;
  writeFile(path: string, b64: string, options: object): Promise<any>;
  unlink(path: string): Promise<any>;

  // RCTEventEmitter
  addListener(eventName: string): void;
  removeListeners(count: number): void;
}

export default TurboModuleRegistry.get<Spec>(
  'RNFSManager',
) as Spec | null;