import { MainService } from './../../shared/services/main.service';
import { Breed } from './../../shared/services/breeds';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss'],
})
export class ChooseComponent {
  @ViewChild('buttons', { static: true }) buttons: any;
  breeds = this.mainService.breeds;
  breed: Breed;
  // getDogImg() {
  //   return this.breed.imgs[1];
  // }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor(private mainService: MainService) {
    this.breed = this.mainService.randomizer(this.breeds);
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
      this.breed = this.mainService.randomizer(this.breeds);
    }, 2000);
  }

  buttonStyleToggle(chosen: boolean) {
    const rightDog = this.breed?.dogs?.indexOf(this.breed.dog, 0);
    return (this.buttons.el.children[rightDog as number].style.backgroundColor =
      chosen ? 'green' : 'transparent');
  }
}
