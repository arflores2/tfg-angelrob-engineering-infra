import { tfg } from './tfg';

tfg.backend('s3', {
  bucket: 'angelrob-terraform-remote-state',
  key: 'angelrob-engineering-infra',
  region: 'us-west-2'
});