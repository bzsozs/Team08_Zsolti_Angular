import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-eletciklus',
  templateUrl: './eletciklus.component.html',
  styleUrls: ['./eletciklus.component.css']
})
export class EletciklusComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {




  valtozo!: string;

  oldalUjraToltes(): void {
    window.location.reload();
  }

  constructor() {
    console.log("constructor lefutása");
  }

  ngOnInit(): void {
    console.log("ngOnInit lefutása");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges meghívása");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck meghívása");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit meghívása");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked meghívása");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit meghívása");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked meghívása");
  }

  ngOnDestroy(): void {
    console.log("Az ngOnDestroy meghívása")
  }

  KomponensTomb = ["alma", "körte", "barack", "szilva"];
  elemTorlese() {
    this.KomponensTomb.splice(0, 1);
    console.log(this.KomponensTomb);
  }


}
