/**
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { BalanceData } from './balanceData';

export class Balance {
    /**
    * Result type.
    */
    'type'?: string;
    /**
    * Exchange name.
    */
    'exchangeName'?: string;
    'data'?: Array<BalanceData>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "exchangeName",
            "baseName": "exchange_name",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<BalanceData>"
        }    ];

    static getAttributeTypeMap() {
        return Balance.attributeTypeMap;
    }
}

