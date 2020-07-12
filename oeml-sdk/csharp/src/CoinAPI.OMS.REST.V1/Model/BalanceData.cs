/* 
 * OEML - REST API
 *
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
 *
 * The version of the OpenAPI document: v1
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = CoinAPI.OMS.REST.V1.Client.OpenAPIDateConverter;

namespace CoinAPI.OMS.REST.V1.Model
{
    /// <summary>
    /// BalanceData
    /// </summary>
    [DataContract]
    public partial class BalanceData :  IEquatable<BalanceData>, IValidatableObject
    {
        /// <summary>
        /// Source of last modification. 
        /// </summary>
        /// <value>Source of last modification. </value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum UpdateOriginEnum
        {
            /// <summary>
            /// Enum INITIALIZATION for value: INITIALIZATION
            /// </summary>
            [EnumMember(Value = "INITIALIZATION")]
            INITIALIZATION = 1,

            /// <summary>
            /// Enum BALANCEMANAGER for value: BALANCE_MANAGER
            /// </summary>
            [EnumMember(Value = "BALANCE_MANAGER")]
            BALANCEMANAGER = 2,

            /// <summary>
            /// Enum EXCHANGE for value: EXCHANGE
            /// </summary>
            [EnumMember(Value = "EXCHANGE")]
            EXCHANGE = 3

        }

        /// <summary>
        /// Source of last modification. 
        /// </summary>
        /// <value>Source of last modification. </value>
        [DataMember(Name="update_origin", EmitDefaultValue=false)]
        public UpdateOriginEnum? UpdateOrigin { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="BalanceData" /> class.
        /// </summary>
        /// <param name="id">symbol_exchange.</param>
        /// <param name="symbolExchange">Currency code..</param>
        /// <param name="symbolCoinapi">CoinAPI currency code..</param>
        /// <param name="balance">The current balance..</param>
        /// <param name="available">The amount that is available to trade..</param>
        /// <param name="locked">Blocked funds..</param>
        /// <param name="updateOrigin">Source of last modification. .</param>
        public BalanceData(string id = default(string), string symbolExchange = default(string), string symbolCoinapi = default(string), float balance = default(float), float available = default(float), float locked = default(float), UpdateOriginEnum? updateOrigin = default(UpdateOriginEnum?))
        {
            this.Id = id;
            this.SymbolExchange = symbolExchange;
            this.SymbolCoinapi = symbolCoinapi;
            this.Balance = balance;
            this.Available = available;
            this.Locked = locked;
            this.UpdateOrigin = updateOrigin;
        }
        
        /// <summary>
        /// symbol_exchange
        /// </summary>
        /// <value>symbol_exchange</value>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public string Id { get; set; }

        /// <summary>
        /// Currency code.
        /// </summary>
        /// <value>Currency code.</value>
        [DataMember(Name="symbol_exchange", EmitDefaultValue=false)]
        public string SymbolExchange { get; set; }

        /// <summary>
        /// CoinAPI currency code.
        /// </summary>
        /// <value>CoinAPI currency code.</value>
        [DataMember(Name="symbol_coinapi", EmitDefaultValue=false)]
        public string SymbolCoinapi { get; set; }

        /// <summary>
        /// The current balance.
        /// </summary>
        /// <value>The current balance.</value>
        [DataMember(Name="balance", EmitDefaultValue=false)]
        public float Balance { get; set; }

        /// <summary>
        /// The amount that is available to trade.
        /// </summary>
        /// <value>The amount that is available to trade.</value>
        [DataMember(Name="available", EmitDefaultValue=false)]
        public float Available { get; set; }

        /// <summary>
        /// Blocked funds.
        /// </summary>
        /// <value>Blocked funds.</value>
        [DataMember(Name="locked", EmitDefaultValue=false)]
        public float Locked { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class BalanceData {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SymbolExchange: ").Append(SymbolExchange).Append("\n");
            sb.Append("  SymbolCoinapi: ").Append(SymbolCoinapi).Append("\n");
            sb.Append("  Balance: ").Append(Balance).Append("\n");
            sb.Append("  Available: ").Append(Available).Append("\n");
            sb.Append("  Locked: ").Append(Locked).Append("\n");
            sb.Append("  UpdateOrigin: ").Append(UpdateOrigin).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as BalanceData);
        }

        /// <summary>
        /// Returns true if BalanceData instances are equal
        /// </summary>
        /// <param name="input">Instance of BalanceData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BalanceData input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.SymbolExchange == input.SymbolExchange ||
                    (this.SymbolExchange != null &&
                    this.SymbolExchange.Equals(input.SymbolExchange))
                ) && 
                (
                    this.SymbolCoinapi == input.SymbolCoinapi ||
                    (this.SymbolCoinapi != null &&
                    this.SymbolCoinapi.Equals(input.SymbolCoinapi))
                ) && 
                (
                    this.Balance == input.Balance ||
                    (this.Balance != null &&
                    this.Balance.Equals(input.Balance))
                ) && 
                (
                    this.Available == input.Available ||
                    (this.Available != null &&
                    this.Available.Equals(input.Available))
                ) && 
                (
                    this.Locked == input.Locked ||
                    (this.Locked != null &&
                    this.Locked.Equals(input.Locked))
                ) && 
                (
                    this.UpdateOrigin == input.UpdateOrigin ||
                    (this.UpdateOrigin != null &&
                    this.UpdateOrigin.Equals(input.UpdateOrigin))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.SymbolExchange != null)
                    hashCode = hashCode * 59 + this.SymbolExchange.GetHashCode();
                if (this.SymbolCoinapi != null)
                    hashCode = hashCode * 59 + this.SymbolCoinapi.GetHashCode();
                if (this.Balance != null)
                    hashCode = hashCode * 59 + this.Balance.GetHashCode();
                if (this.Available != null)
                    hashCode = hashCode * 59 + this.Available.GetHashCode();
                if (this.Locked != null)
                    hashCode = hashCode * 59 + this.Locked.GetHashCode();
                if (this.UpdateOrigin != null)
                    hashCode = hashCode * 59 + this.UpdateOrigin.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
