import { MainService } from './../../shared/services/main.service';
import { Breed, Breeds } from './../../shared/services/breeds';
import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss'],
})
export class ChooseComponent {
  @ViewChild('buttons', { static: true }) buttons: any;
  breeds = this.mainService.breeds;
  breed: Breed = this.mainService.randomizer(this.breeds);
  @ViewChild('slides', { static: false }) slides?: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  refreshBreed = new BehaviorSubject(false);
  refreshBreed$ = this.refreshBreed.asObservable();

  constructor(private mainService: MainService) {
    this.refreshBreed$.subscribe((res) => {
      this.breed = this.mainService.randomizer(this.breeds);
      this.slides?.slideTo(0);
      this.breeds.length === 1 ? (this.breeds = Breeds.slice()) : null;
    });
  }

  chooseDog(dog: string, event: any & { target: HTMLElement }) {
    this.breed.isChosen = true;
    const chosenBreed = this.breeds.find((breed) => breed.isChosen);
    this.buttonStyleToggle(true);
    if (dog !== this.breed.dog) {
      event.target.style.backgroundColor = 'red';
    }

    setTimeout(() => {
      event.target.style.backgroundColor = 'transparent';
      this.buttonStyleToggle(false);
      this.breeds.splice(this.breeds.indexOf(chosenBreed as Breed), 1);
      this.refreshBreed.next(true);
    }, 2000);
  }

  buttonStyleToggle(chosen: boolean) {
    const rightDog = this.breed?.dogs?.indexOf(this.breed.dog, 0);
    return (this.buttons.el.children[rightDog as number].style.backgroundColor =
      chosen ? 'green' : 'transparent');
  }
}
