import { tfg } from './tfg';
import { remoteStateBucket } from './s3';

tfg.output('remote_state_bucket', {
  value: remoteStateBucket.attr('bucket')
});
