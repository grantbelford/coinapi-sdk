note
 description:"[
		OEML - REST API
 		This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 
  		The version of the OpenAPI document: v1
 	    

  	NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

 		 Do not edit the class manually.
 	]"
	date: "$Date$"
	revision: "$Revision$"
	EIS:"Eiffel openapi generator", "src=https://openapi-generator.tech", "protocol=uri"

expanded class
	API_JSON_SERIALIZER


feature -- Access

	to_json_string (a_obj: ANY): STRING
			-- Convert an object `a_obj' to String representation.
		local
			obj: ANY
			conv_to: JSON_REFLECTOR_SERIALIZER
			ctx: detachable JSON_SERIALIZER_CONTEXT
			s: STRING
		do
			obj := a_obj

				-- Auto serialization, handling table iterable as JSON Object, and iterable as ARRAY. Without typename.
			create conv_to
			create ctx
			ctx.set_pretty_printing
			ctx.set_is_type_name_included (False)
			ctx.set_default_serializer (create {JSON_REFLECTOR_SERIALIZER})
			ctx.register_serializer (create {TABLE_ITERABLE_JSON_SERIALIZER [detachable ANY, READABLE_STRING_GENERAL]}, {TABLE_ITERABLE [detachable ANY, READABLE_STRING_GENERAL]})
			ctx.register_serializer (create {ITERABLE_JSON_SERIALIZER [detachable ANY]}, {ITERABLE [detachable ANY]})

			s := conv_to.to_json_string (obj, ctx)
			Result := s
		end

end
