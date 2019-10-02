import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { SPINNERS } from '@ionic/core/dist/types/components/spinner/spinner-configs';
import { map } from 'rxjs/operators';
import { timingSafeEqual } from 'crypto';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
@Injectable({
  providedIn: 'root'
})
export class HotdogService {

  private hotdogCollection:AngularFirestoreCollection;

  private hotdogs:Observable<Object[]>;

  constructor(private db:AngularFirestore) { 
    this.hotdogCollection = db.collection('hotdog')

    this.hotdogs = this.hotdogCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(hotdog =>{
          let dogtemp = hotdog.payload.doc.data()
          return dogtemp
        })
      })
    )
  }

  public addDog(hotdog){
    return this.hotdogCollection.add(hotdog)
  }
  public getDogs(){
    return this.hotdogs
  }
}
