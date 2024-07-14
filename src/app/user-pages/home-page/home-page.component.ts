import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faMicrochip} from '@fortawesome/free-solid-svg-icons';
import {faWifi} from '@fortawesome/free-solid-svg-icons';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {faGears} from '@fortawesome/free-solid-svg-icons';
import {faShieldHalved} from '@fortawesome/free-solid-svg-icons';
import {faRobot} from '@fortawesome/free-solid-svg-icons';
import {faGamepad} from '@fortawesome/free-solid-svg-icons';
import {faNotesMedical} from '@fortawesome/free-solid-svg-icons';
import {faDiagramProject} from '@fortawesome/free-solid-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import {faBookOpenReader} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home-page',
  standalone:true,
  imports:[FontAwesomeModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  faMicrochip = faMicrochip;
  faWifi = faWifi;
  faComputer = faLaptopCode;
  faCode = faCode;
  faGears = faGears;
  faShieldHalved = faShieldHalved;
  faRobot = faRobot;
  faGamepad = faGamepad;
  faNotesMedical = faNotesMedical;
  faDiagramProject = faDiagramProject;
  faDatabase = faDatabase; 
  faBookOpenReader = faBookOpenReader;
}
