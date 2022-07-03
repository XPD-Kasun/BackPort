import { useState } from 'react';
import { DropdownProps } from './types';
import { TextBox } from '../textbox';
import getItem from '../../../shared/getSelectedItem';
import { IoSearch, IoChevronDownOutline } from 'react-icons/io5';


function FrameworkDropdown({ className = "dropdown", dataSource, onSearchChange, selectedId, labelComponent, listItemComponent }: DropdownProps) {

       let [selectedItem, setSelectedItem] = useState(getItem(dataSource, selectedId));
       let [isOpen, setIsOpen] = useState(false);

       let LabelComponent = labelComponent;
       let ListItemComponent = listItemComponent;

       if(isOpen) {
              className += ' opened';
       }

       const onBlur = () => {
              setIsOpen(false);
       };

       const onListItemSelect = (evt, item) => {
              setSelectedItem(item);
              setIsOpen(false);
       };

       const onLabelClick = () => {
              setIsOpen((isOpen) => !isOpen);
       };

       const onSearchTermChange = (text) => {
              onSearchChange && onSearchChange(text);
       };

       return (
              <div className={className} onBlur={onBlur}>
                     <div className="dropdown-wrapper">
                            <div className="dropdown-container">
                                   <div className="dropdown-hidden-select">
                                          <select value={dataSource.idSelector(selectedItem)}>
                                                 {
                                                        selectedItem && (
                                                               <option value={dataSource.idSelector(selectedItem)}></option>
                                                        )
                                                 }
                                          </select>
                                   </div>
                                   <div className="dropdown-display-label" onClick={onLabelClick}>
                                          <div className="label-text">
                                                 <LabelComponent item={selectedItem}></LabelComponent>
                                          </div>
                                          <div className="label-icon">
                                                 <IoChevronDownOutline></IoChevronDownOutline>
                                          </div>

                                   </div>
                                   <div className="dropdown-popup" style={{ display: (isOpen ? 'block' : 'none') }}>
                                          <div className="dropdown-popup-container">
                                                 <div className="dropdown-search">
                                                        <div className="search-container">
                                                               <div className="search-icon"><IoSearch color="#90a7b6"></IoSearch></div>
                                                               <TextBox hasBorder={false} placeholder="Search" onChange={onSearchTermChange}></TextBox>
                                                        </div>
                                                 </div>
                                                 <ul className="dropdown-items">
                                                        {
                                                               dataSource.data.map((item) => {
                                                                      return (
                                                                             <li>
                                                                                    <ListItemComponent item={item} onSelect={onListItemSelect} />
                                                                             </li>
                                                                      );
                                                               })
                                                        }
                                                 </ul>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div >
       )

}

export default FrameworkDropdown;