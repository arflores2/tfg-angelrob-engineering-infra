import { tfg } from './tfg';

export const remoteStateBucket = tfg.resource('aws_s3_bucket', 'remote_state_bucket', {
  bucket: 'angelrob-terraform-remote-state',
  acl: 'private',
});
