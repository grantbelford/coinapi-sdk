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
    /// The order execution report message.
    /// </summary>
    [DataContract]
    public partial class ExecutionReportAllOf :  IEquatable<ExecutionReportAllOf>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name="status", EmitDefaultValue=true)]
        public OrdStatus Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ExecutionReportAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ExecutionReportAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ExecutionReportAllOf" /> class.
        /// </summary>
        /// <param name="clientOrderIdFormatExchange">Hash client id (required).</param>
        /// <param name="exchangeOrderId">Exchange order id.</param>
        /// <param name="amountOpen">Amount open (required).</param>
        /// <param name="amountFilled">Amount filled (required).</param>
        /// <param name="status">status (required).</param>
        /// <param name="timeOrder">Timestamped history of order status changes. (required).</param>
        /// <param name="errorMessage">Error message.</param>
        public ExecutionReportAllOf(string clientOrderIdFormatExchange = default(string), string exchangeOrderId = default(string), decimal amountOpen = default(decimal), decimal amountFilled = default(decimal), OrdStatus status = default(OrdStatus), List<List<string>> timeOrder = default(List<List<string>>), string errorMessage = default(string))
        {
            // to ensure "clientOrderIdFormatExchange" is required (not null)
            if (clientOrderIdFormatExchange == null)
            {
                throw new InvalidDataException("clientOrderIdFormatExchange is a required property for ExecutionReportAllOf and cannot be null");
            }
            else
            {
                this.ClientOrderIdFormatExchange = clientOrderIdFormatExchange;
            }
            
            // to ensure "amountOpen" is required (not null)
            if (amountOpen == null)
            {
                throw new InvalidDataException("amountOpen is a required property for ExecutionReportAllOf and cannot be null");
            }
            else
            {
                this.AmountOpen = amountOpen;
            }
            
            // to ensure "amountFilled" is required (not null)
            if (amountFilled == null)
            {
                throw new InvalidDataException("amountFilled is a required property for ExecutionReportAllOf and cannot be null");
            }
            else
            {
                this.AmountFilled = amountFilled;
            }
            
            // to ensure "status" is required (not null)
            if (status == null)
            {
                throw new InvalidDataException("status is a required property for ExecutionReportAllOf and cannot be null");
            }
            else
            {
                this.Status = status;
            }
            
            // to ensure "timeOrder" is required (not null)
            if (timeOrder == null)
            {
                throw new InvalidDataException("timeOrder is a required property for ExecutionReportAllOf and cannot be null");
            }
            else
            {
                this.TimeOrder = timeOrder;
            }
            
            this.ExchangeOrderId = exchangeOrderId;
            this.ErrorMessage = errorMessage;
        }
        
        /// <summary>
        /// Hash client id
        /// </summary>
        /// <value>Hash client id</value>
        [DataMember(Name="client_order_id_format_exchange", EmitDefaultValue=true)]
        public string ClientOrderIdFormatExchange { get; set; }

        /// <summary>
        /// Exchange order id
        /// </summary>
        /// <value>Exchange order id</value>
        [DataMember(Name="exchange_order_id", EmitDefaultValue=false)]
        public string ExchangeOrderId { get; set; }

        /// <summary>
        /// Amount open
        /// </summary>
        /// <value>Amount open</value>
        [DataMember(Name="amount_open", EmitDefaultValue=true)]
        public decimal AmountOpen { get; set; }

        /// <summary>
        /// Amount filled
        /// </summary>
        /// <value>Amount filled</value>
        [DataMember(Name="amount_filled", EmitDefaultValue=true)]
        public decimal AmountFilled { get; set; }


        /// <summary>
        /// Timestamped history of order status changes.
        /// </summary>
        /// <value>Timestamped history of order status changes.</value>
        [DataMember(Name="time_order", EmitDefaultValue=true)]
        public List<List<string>> TimeOrder { get; set; }

        /// <summary>
        /// Error message
        /// </summary>
        /// <value>Error message</value>
        [DataMember(Name="error_message", EmitDefaultValue=false)]
        public string ErrorMessage { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ExecutionReportAllOf {\n");
            sb.Append("  ClientOrderIdFormatExchange: ").Append(ClientOrderIdFormatExchange).Append("\n");
            sb.Append("  ExchangeOrderId: ").Append(ExchangeOrderId).Append("\n");
            sb.Append("  AmountOpen: ").Append(AmountOpen).Append("\n");
            sb.Append("  AmountFilled: ").Append(AmountFilled).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  TimeOrder: ").Append(TimeOrder).Append("\n");
            sb.Append("  ErrorMessage: ").Append(ErrorMessage).Append("\n");
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
            return this.Equals(input as ExecutionReportAllOf);
        }

        /// <summary>
        /// Returns true if ExecutionReportAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of ExecutionReportAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ExecutionReportAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ClientOrderIdFormatExchange == input.ClientOrderIdFormatExchange ||
                    (this.ClientOrderIdFormatExchange != null &&
                    this.ClientOrderIdFormatExchange.Equals(input.ClientOrderIdFormatExchange))
                ) && 
                (
                    this.ExchangeOrderId == input.ExchangeOrderId ||
                    (this.ExchangeOrderId != null &&
                    this.ExchangeOrderId.Equals(input.ExchangeOrderId))
                ) && 
                (
                    this.AmountOpen == input.AmountOpen ||
                    (this.AmountOpen != null &&
                    this.AmountOpen.Equals(input.AmountOpen))
                ) && 
                (
                    this.AmountFilled == input.AmountFilled ||
                    (this.AmountFilled != null &&
                    this.AmountFilled.Equals(input.AmountFilled))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.TimeOrder == input.TimeOrder ||
                    this.TimeOrder != null &&
                    input.TimeOrder != null &&
                    this.TimeOrder.SequenceEqual(input.TimeOrder)
                ) && 
                (
                    this.ErrorMessage == input.ErrorMessage ||
                    (this.ErrorMessage != null &&
                    this.ErrorMessage.Equals(input.ErrorMessage))
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
                if (this.ClientOrderIdFormatExchange != null)
                    hashCode = hashCode * 59 + this.ClientOrderIdFormatExchange.GetHashCode();
                if (this.ExchangeOrderId != null)
                    hashCode = hashCode * 59 + this.ExchangeOrderId.GetHashCode();
                if (this.AmountOpen != null)
                    hashCode = hashCode * 59 + this.AmountOpen.GetHashCode();
                if (this.AmountFilled != null)
                    hashCode = hashCode * 59 + this.AmountFilled.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
                if (this.TimeOrder != null)
                    hashCode = hashCode * 59 + this.TimeOrder.GetHashCode();
                if (this.ErrorMessage != null)
                    hashCode = hashCode * 59 + this.ErrorMessage.GetHashCode();
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
