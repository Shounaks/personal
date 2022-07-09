import { Component, OnInit } from '@angular/core';
import {faAngular, faBootstrap, faCss3, faCss3Alt, faDocker, faGooglePlusSquare, faHtml5, faJava, faJsSquare, faVuejs, IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {faBookAtlas, faDatabase} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillsets:Array<Skillset>;
  
  constructor() {
    let angular:Skill= {
      name: "Angular",
      fontAwesomeIcon: faAngular,
      skillInfo: "Working with Angular 14 having implemented multiple websites with Angular Routing, Forms, and Security",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let bootstrap:Skill= {
      name: "Bootstrap",
      fontAwesomeIcon: faBootstrap,
      skillInfo: "Widely used CSS(/JS) framework which is popular to create responsive websites quickly in a team",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 5
    }
    let bulma:Skill= {
      name: "Bulma",
      fontAwesomeIcon: faCss3,
      skillInfo: "A smaller-but-awesome CSS Framework which is purely CSS based and hence can be quickly integrated in any project",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 3
    }
    let tailwind:Skill= {
      name: "Tailwind",
      fontAwesomeIcon: faCss3Alt,
      skillInfo: "Utility Classes in CSS were the most awesoem things that TailwindCSS put on the table.",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let typescript:Skill= {
      name: "Typescript",
      fontAwesomeIcon: faJsSquare,
      skillInfo: "Javascript but better and safer 😂",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 5
    }
    let javascript:Skill= {
      name: "Javascript",
      fontAwesomeIcon: faJsSquare,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 5
    }
    let vue:Skill= {
      name: "Vue",
      fontAwesomeIcon: faVuejs,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 2
    }
    let svelte:Skill= {
      name: "Svelte",
      fontAwesomeIcon: faJsSquare,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 1
    }
    let css:Skill= {
      name: "CSS3",
      fontAwesomeIcon: faCss3Alt,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 1
    }
    //personal\src\assets\technology
    let html:Skill= {
      name: "HTML5",
      fontAwesomeIcon: faHtml5,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/html5.png",
      Profeciency: 1
    }
    let frontend:Skillset = {
      name: "Frontend",
      skills: [angular,bootstrap,bulma,tailwind,typescript,javascript,vue,svelte,css,html],
      description: "Creating Beautiful websites which attracts Viewers"
    }

    let oracle:Skill= {
      name: "Oracle Database 11g and 13c",
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      fontAwesomeIcon: faDatabase,
      Profeciency: 4
    }
    let mysql:Skill= {
      name: "MySQL and MySQL Workbench",
      fontAwesomeIcon: faDatabase,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let java:Skill= {
      name: "Java (Spring Boot Ecosystem)",
      fontAwesomeIcon: faJava,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let backend:Skillset = {
      name: "Backend",
      skills: [oracle,mysql,java],
      description: "Developing Infrastructure that will handle and store precious data"
    }
    
    let docker:Skill= {
      name: "Docker",
      fontAwesomeIcon: faDocker,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let gcp:Skill= {
      name: "Google Cloud Platform",
      fontAwesomeIcon: faGooglePlusSquare,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let swagger:Skill= {
      name: "Swagger - Documentation & CodeGen",
      fontAwesomeIcon: faBookAtlas,
      skillInfo: "Trained in Angular by Infosys",
      backgroundImage: "assets/technology/angular.png",
      Profeciency: 4
    }
    let tools:Skillset = {
      name: "Tools",
      skills: [docker,gcp,swagger],
      description: "Developing Infrastructure that will handle and store precious data"
    }

    this.skillsets = [frontend,backend,tools];
  }

  ngOnInit(): void {
  }

}

interface Skillset{
  name:string,
  skills:Array<Skill>,
  description: string
}

interface Skill{
  name:string,
  fontAwesomeIcon:IconDefinition,
  backgroundImage:string,
  skillInfo:string,
  Profeciency:number
}