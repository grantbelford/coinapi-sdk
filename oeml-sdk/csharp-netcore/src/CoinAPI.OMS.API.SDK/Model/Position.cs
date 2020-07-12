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
using OpenAPIDateConverter = CoinAPI.OMS.API.SDK.Client.OpenAPIDateConverter;

namespace CoinAPI.OMS.API.SDK.Model
{
    /// <summary>
    /// Position
    /// </summary>
    [DataContract]
    public partial class Position :  IEquatable<Position>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Position" /> class.
        /// </summary>
        /// <param name="type">Result type..</param>
        /// <param name="exchangeName">Name of exchange..</param>
        /// <param name="data">data.</param>
        public Position(string type = default(string), string exchangeName = default(string), List<PositionData> data = default(List<PositionData>))
        {
            this.Type = type;
            this.ExchangeName = exchangeName;
            this.Data = data;
        }
        
        /// <summary>
        /// Result type.
        /// </summary>
        /// <value>Result type.</value>
        [DataMember(Name="type", EmitDefaultValue=false)]
        public string Type { get; set; }

        /// <summary>
        /// Name of exchange.
        /// </summary>
        /// <value>Name of exchange.</value>
        [DataMember(Name="exchange_name", EmitDefaultValue=false)]
        public string ExchangeName { get; set; }

        /// <summary>
        /// Gets or Sets Data
        /// </summary>
        [DataMember(Name="data", EmitDefaultValue=false)]
        public List<PositionData> Data { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Position {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  ExchangeName: ").Append(ExchangeName).Append("\n");
            sb.Append("  Data: ").Append(Data).Append("\n");
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
            return this.Equals(input as Position);
        }

        /// <summary>
        /// Returns true if Position instances are equal
        /// </summary>
        /// <param name="input">Instance of Position to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Position input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.ExchangeName == input.ExchangeName ||
                    (this.ExchangeName != null &&
                    this.ExchangeName.Equals(input.ExchangeName))
                ) && 
                (
                    this.Data == input.Data ||
                    this.Data != null &&
                    input.Data != null &&
                    this.Data.SequenceEqual(input.Data)
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
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.ExchangeName != null)
                    hashCode = hashCode * 59 + this.ExchangeName.GetHashCode();
                if (this.Data != null)
                    hashCode = hashCode * 59 + this.Data.GetHashCode();
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
