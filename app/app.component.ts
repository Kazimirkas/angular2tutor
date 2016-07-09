import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  strength: number;
  agility: number;
};

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', strength: 2, agility: 0 },
  { id: 12, name: 'Narco', strength: 0, agility: 2  },
  { id: 13, name: 'Bombasto', strength: 2, agility: 0  },
  { id: 14, name: 'Celeritas', strength: 0, agility: 2  },
  { id: 15, name: 'Magneta', strength: 1, agility: 1  },
  { id: 16, name: 'RubberMan', strength: 0, agility: 2  },
  { id: 17, name: 'Dynama', strength: 2, agility: 0  },
  { id: 18, name: 'Dr IQ', strength: 1, agility: 1  },
  { id: 19, name: 'Magma', strength: 1, agility: 1  },
  { id: 20, name: 'Tornado', strength: 2, agility: 0  }
];

@Component({
  selector: 'my-app',
  template: `  
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li 
        *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
      <div><label>strength: </label>{{selectedHero.strength}}</div>
      <div><label>agility: </label>{{selectedHero.agility}}</div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent { 
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
  }
}

