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
class BALANCE 

inherit

  ANY
      redefine
          out 
      end


feature --Access

    type: detachable STRING_32 
      -- Result type.
    exchange_name: detachable STRING_32 
      -- Exchange name.
    data: detachable LIST [BALANCE_DATA] 
      

feature -- Change Element  
 
    set_type (a_name: like type)
        -- Set 'type' with 'a_name'.
      do
        type := a_name
      ensure
        type_set: type = a_name		
      end

    set_exchange_name (a_name: like exchange_name)
        -- Set 'exchange_name' with 'a_name'.
      do
        exchange_name := a_name
      ensure
        exchange_name_set: exchange_name = a_name		
      end

    set_data (a_name: like data)
        -- Set 'data' with 'a_name'.
      do
        data := a_name
      ensure
        data_set: data = a_name		
      end


 feature -- Status Report

    out: STRING
          -- <Precursor>
      do
        create Result.make_empty
        Result.append("%Nclass BALANCE%N")
        if attached type as l_type then
          Result.append ("%Ntype:")
          Result.append (l_type.out)
          Result.append ("%N")    
        end  
        if attached exchange_name as l_exchange_name then
          Result.append ("%Nexchange_name:")
          Result.append (l_exchange_name.out)
          Result.append ("%N")    
        end  
        if attached data as l_data then
          across l_data as ic loop
            Result.append ("%N data:")
            Result.append (ic.item.out)
            Result.append ("%N")
          end
        end 
      end
end


