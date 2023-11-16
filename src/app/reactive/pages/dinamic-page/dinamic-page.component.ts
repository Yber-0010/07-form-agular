import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dinamic-page.component.html',
  styles: [
  ]
})
export class DinamicPageComponent {

    public myForm: FormGroup = this.fb.group({
        name: ['',[Validators.required,Validators.minLength(3)],[]],
        favoriteGames: this.fb.array([
            ['MEtal Gear',Validators.required],
            ['Death Stranding',Validators.required],
        ])
    })
    public newFAvorite: FormControl = new FormControl('',[Validators.required])

    constructor(private fb:FormBuilder){}

    get favoriteGames() {
        return this.myForm.get('favoriteGames') as FormArray
    }

    isValidfield( field: string): boolean | null {
        return this.myForm.controls[field].errors && this.myForm.controls[field].touched
    }
    getFielError(field:string):string | null {
        if(!this.myForm.controls[field] ) return null;
        const errors = this.myForm.controls[field].errors || {};
        for (const key of Object.keys(errors)){
            if(key=='required'){return "Este campo es requerido"}
            if(key=='minlength'){return `Minimo ${errors['minlength'].requiredLength} caracteres.`}
        }
        return null;
    }
    onAddToFavorites():void{
        if(this.newFAvorite.invalid) return;
        const newGame = this.newFAvorite.value
        // this.favoriteGames.push(new FormControl(newGame,Validators.required)); // esto si no estubieramos trabajando con el formbuilder
        this.favoriteGames.push(
            this.fb.control(newGame, Validators.required)
        );
        this.newFAvorite.reset()
    }

    isValidfieldInArray(formArray:FormArray,index:number){
        return formArray.controls[index].errors && formArray.controls[index].touched;
    }

    onDeleteFavorite(index:number):void{
        this.favoriteGames.removeAt(index);
    }

    onSubmit():void{
        if(this.myForm.invalid) {
            this.myForm.markAllAsTouched();
            return;
        }
        console.log(this.myForm.value);
        // (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([])
        this.favoriteGames.clear();
        this.myForm.reset();
        this.newFAvorite.reset();
    }


}
