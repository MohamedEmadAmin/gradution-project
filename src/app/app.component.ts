import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { FeaturesComponent } from "./components/features/features.component";
import { HeroComponent } from "./components/hero/hero.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestimonialsComponent, FooterComponent, PricingComponent, FeaturesComponent, HeroComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'whitespace-landing';
}
