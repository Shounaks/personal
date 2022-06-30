import { Component, OnInit } from '@angular/core';
import { IconDefinition,faFacebookSquare,faTwitterSquare,faInstagramSquare,faGithubSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  iconList: Array<NavbarIcon> = [
    {icon: faFacebookSquare, tooltip: "Facebook", redirectTo:"#DeletedAccount"},
    {icon: faTwitterSquare, tooltip: "Twitter", redirectTo:"#DeletedAccount"},
    {icon: faInstagramSquare, tooltip: "Instagram", redirectTo:"#DeletedAccount"},
    {icon: faGithubSquare, tooltip: "Github", redirectTo:"#DeletedAccount"},
    {icon: faLinkedin, tooltip: "LinkedIn", redirectTo:"#DeletedAccount"},
    {icon: faEnvelopeSquare, tooltip: "E-Mail", redirectTo:"#DeletedAccount"},
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