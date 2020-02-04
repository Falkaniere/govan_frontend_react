import React, { Component } from 'react';

import { ListVan, SubmitButton } from './styles';

export default class ListVans extends Component {
  state = {
    NewVan: '',
  };

  render() {
    return (
      <>
        <ListVan>
          <li>
            <img
              src="'https://public-v2links.adobecc.com/eeda1919-ce76-4a40-51af-f8bcdf496f04/component?params=component_id%3A6a7e7189-a85e-485b-9826-ebf5525a84ed&params=version%3A0&token=1578659560_da39a3ee_6deb26d8703944cabdcf8afab25d098e6c050fdb&api_key=CometServer1',
  "
              alt="Van escolar"
            />
            <div>
              <strong>Van do Dilsinho</strong>
              <span>Sprint executiva</span>
            </div>
          </li>
        </ListVan>
        <SubmitButton>
          <span>Trocar Endereço</span>
        </SubmitButton>
      </>
    );
  }
}
// state = {
//   vans: [
//     {
//       id: 1,
//       name: 'Van do dilsinho',
//       car: 'sprint executiva',
//       img:
//         'https://public-v2links.adobecc.com/eeda1919-ce76-4a40-51af-f8bcdf496f04/component?params=component_id%3A6a7e7189-a85e-485b-9826-ebf5525a84ed&params=version%3A0&token=1578659560_da39a3ee_6deb26d8703944cabdcf8afab25d098e6c050fdb&api_key=CometServer1',
//     },
//     {
//       id: 2,
//       name: 'Carmelita',
//       car: 'mercedes',
//       img:
//         'https://public-v2links.adobecc.com/eeda1919-ce76-4a40-51af-f8bcdf496f04/component?params=component_id%3A6a7e7189-a85e-485b-9826-ebf5525a84ed&params=version%3A0&token=1578659560_da39a3ee_6deb26d8703944cabdcf8afab25d098e6c050fdb&api_key=CometServer1',
//     },
//     {
//       id: 3,
//       name: 'Van do Joselito',
//       car: 'Kombi 2012',
//       img:
//         'https://public-v2links.adobecc.com/eeda1919-ce76-4a40-51af-f8bcdf496f04/component?params=component_id%3A6a7e7189-a85e-485b-9826-ebf5525a84ed&params=version%3A0&token=1578659560_da39a3ee_6deb26d8703944cabdcf8afab25d098e6c050fdb&api_key=CometServer1',
//     },
//     {
//       id: 4,
//       name: 'monica silva',
//       car: 'van fiat 212',
//       img:
//         'https://public-v2links.adobecc.com/eeda1919-ce76-4a40-51af-f8bcdf496f04/component?params=component_id%3A6a7e7189-a85e-485b-9826-ebf5525a84ed&params=version%3A0&token=1578659560_da39a3ee_6deb26d8703944cabdcf8afab25d098e6c050fdb&api_key=CometServer1',
//     },
//   ],
// };

// render() {
//   const { vans } = this.state;
