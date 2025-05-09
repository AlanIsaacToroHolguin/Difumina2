import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faYoutube,
  faSpotify,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  icons = {
    facebook: faFacebookF,
    instagram: faInstagram,
    youtube: faYoutube,
    spotify: faSpotify,
    twitter: faTwitter
  };
}