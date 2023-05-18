import {
  Entity, Tree, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, TreeChildren, TreeParent
} from 'typeorm';
import { Building } from './building.entity';
import DefaultEntity from './default.entity';

@Entity('locations')
@Tree("closure-table")
export class BuildingLocation extends DefaultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Building, building => building.locations)
  @JoinColumn({ name: 'building_id' })
  building: Building;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 20 })
  number: string;

  @Column({ length: 20 })
  area: string;

  @TreeParent()
  @JoinColumn({ name: 'parent_location_id' })
  parentLocation: BuildingLocation;

  @TreeChildren()
  childLocation: BuildingLocation[]
}