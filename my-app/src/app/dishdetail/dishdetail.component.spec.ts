import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, Input } from '@angular/core';
import { DishdetailComponent } from './dishdetail.component';
import { Dish } from '../shared/dish';

export class DishdetailComponent implements OnInit {

  @Input()
  dish: Dish;

describe('DishdetailComponent', () => {
  let component: DishdetailComponent;
  let fixture: ComponentFixture<DishdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

