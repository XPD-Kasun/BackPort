import { ReactChildren } from "../../../types";

export enum Align {
       Left = 'start',
       Right = 'end',
       Center = 'center',
       Top = 'start',
       Bottom = 'end'
}

export enum Direction {
       Row = 'row',
       Column = 'column'
};


export interface FlexProps {
       children: ReactChildren,
       align: Align,
       xalign: Align,
       direction: Direction,
       className: string
}
