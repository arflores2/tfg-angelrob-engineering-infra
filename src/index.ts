import { map, fn } from 'terraform-generator';
import * as path from 'path';
import { tfg } from './tfg';

import './provider';
import './s3';
import './remote';
import './output';

const outputDir = path.join('output');
tfg.write({ dir: outputDir, format: true });
