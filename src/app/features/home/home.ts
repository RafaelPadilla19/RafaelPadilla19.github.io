import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Experience } from './components/experience';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Experience],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Home {}
