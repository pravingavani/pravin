import { AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators{
    static connotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)
           return{ connotContainSpace: true };
           return null;
    }
    static shouldBeUnique( control: AbstractControl) : Promise<ValidationErrors |null>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control.value === 'Pravin')
                   resolve({ shouldBeUnique: true });
                else 
                    resolve(null);
            },2000);
        });
    }
   
    
}