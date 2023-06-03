import { ChangeDetectorRef, Component, ContentChild, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {WantedItem} from './models/wanted-item';
import {FbiapiService} from './services/fbiapi.service';
import { BehaviorSubject, Observable, debounce, debounceTime, distinctUntilChanged, first, fromEvent, tap } from 'rxjs';
import { WantedList } from './models/wanted-list';
import { WantedTableComponent } from './components/wanted-table/wanted-table.component';
import { ActivatedRoute, Routes } from '@angular/router';
import { EditedItem } from './models/edit-queue-item';
import { MatDialog } from '@angular/material/dialog';
import { EditWantedItemComponent } from './components/edit-wanted-item/edit-wanted-item.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { EditedTabComponent } from './components/tabs/edited-tab/edited-tab.component';
import { WantedTabComponent } from './components/tabs/wanted-tab/wanted-tab.component';


@Component({
  selector: 'app-fbi-content',
  templateUrl: './fbi-content.component.html',
  styleUrls: ['./fbi-content.component.css'],
})
export class FbiContentComponent {
	editedList$ = new Observable<WantedItem[]>()

	editedSet = new Set<string>()
}
