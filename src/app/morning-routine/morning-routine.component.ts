import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-morning-routine',
  templateUrl: './morning-routine.component.html',
  styleUrls: ['./morning-routine.component.css']
})
export class MorningRoutineComponent {
routineArray = [{routineName: 'take a shower', isCompleted: false}]

updateIndex: any;
isEditEnabled: boolean = false;

  toDate: Date = new Date(); 


  onAdd(form: NgForm){
    
    
    this.routineArray.push({
      routineName:form.controls['routine'].value,
      isCompleted :false

    })
    form.reset();
  }

  onDelete(index: number){
    console.log(index);
    
    this.routineArray.splice(index,1)

  }

onCheck(index: number){
  console.log(this.routineArray);
  
  this.routineArray[index].isCompleted = !this.routineArray[index].isCompleted 

}

onEdit(form: NgForm, index: number){
  form.controls['routine'].setValue(this.routineArray[index].routineName);
  this.updateIndex = index;
  this.isEditEnabled = true;
}
onUpdate(form: NgForm){
  this.routineArray[this.updateIndex].routineName = form.controls['routine'].value;
  this.routineArray[this.updateIndex].isCompleted = false;
  form.reset();
  this.updateIndex = undefined;
  this.isEditEnabled = false;
}

 
}










