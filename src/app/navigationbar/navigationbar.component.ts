import { Component, OnInit } from '@angular/core';
import { faXbox, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faHome,faMobileRetro,faScrewdriverWrench, faTimeline,faProjectDiagram,faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  iconList: Array<NavbarIcon> = [
    {icon: faHome, tooltip: "home", redirectTo: "home"},
    {icon: faXbox, tooltip: "hobby", redirectTo: "hobby"},
    {icon: faScrewdriverWrench, tooltip: "skillset", redirectTo: "skillset"},
    {icon: faPeopleGroup, tooltip: "project", redirectTo: "project"},
    {icon: faTimeline, tooltip: "experience", redirectTo: "experience"},
    {icon: faMobileRetro, tooltip: "contact", redirectTo: "contact"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface NavbarIcon{
  icon:IconDefinition,
  tooltip:string,
  redirectTo:string
}
