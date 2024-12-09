import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked taskList = ['Task 1', 'Task 2', 'Task 3'];
}
