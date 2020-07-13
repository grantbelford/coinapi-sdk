{-
   OEML - REST API

   This section will provide necessary information about the `CoinAPI OEML REST API` protocol. 

   OpenAPI Version: 3.0.0
   OEML - REST API API version: v1
   Contact: support@coinapi.io
   Generated by OpenAPI Generator (https://openapi-generator.tech)
-}

{-|
Module : OEML-REST.Lens
-}

{-# LANGUAGE KindSignatures #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE RankNTypes #-}
{-# LANGUAGE RecordWildCards #-}
{-# OPTIONS_GHC -fno-warn-name-shadowing -fno-warn-unused-matches -fno-warn-unused-binds -fno-warn-unused-imports #-}

module OEML-REST.ModelLens where

import qualified Data.Aeson as A
import qualified Data.ByteString.Lazy as BL
import qualified Data.Data as P (Data, Typeable)
import qualified Data.Map as Map
import qualified Data.Set as Set
import qualified Data.Time as TI

import Data.Text (Text)

import Prelude (($), (.),(<$>),(<*>),(=<<),Maybe(..),Bool(..),Char,Double,FilePath,Float,Int,Integer,String,fmap,undefined,mempty,maybe,pure,Monad,Applicative,Functor)
import qualified Prelude as P

import OEML-REST.Model
import OEML-REST.Core


-- * Balance

-- | 'balanceExchangeId' Lens
balanceExchangeIdL :: Lens_' Balance (Maybe Text)
balanceExchangeIdL f Balance{..} = (\balanceExchangeId -> Balance { balanceExchangeId, ..} ) <$> f balanceExchangeId
{-# INLINE balanceExchangeIdL #-}

-- | 'balanceData' Lens
balanceDataL :: Lens_' Balance (Maybe [BalanceData])
balanceDataL f Balance{..} = (\balanceData -> Balance { balanceData, ..} ) <$> f balanceData
{-# INLINE balanceDataL #-}



-- * BalanceData

-- | 'balanceDataSymbolExchange' Lens
balanceDataSymbolExchangeL :: Lens_' BalanceData (Maybe Text)
balanceDataSymbolExchangeL f BalanceData{..} = (\balanceDataSymbolExchange -> BalanceData { balanceDataSymbolExchange, ..} ) <$> f balanceDataSymbolExchange
{-# INLINE balanceDataSymbolExchangeL #-}

-- | 'balanceDataSymbolCoinapi' Lens
balanceDataSymbolCoinapiL :: Lens_' BalanceData (Maybe Text)
balanceDataSymbolCoinapiL f BalanceData{..} = (\balanceDataSymbolCoinapi -> BalanceData { balanceDataSymbolCoinapi, ..} ) <$> f balanceDataSymbolCoinapi
{-# INLINE balanceDataSymbolCoinapiL #-}

-- | 'balanceDataBalance' Lens
balanceDataBalanceL :: Lens_' BalanceData (Maybe Float)
balanceDataBalanceL f BalanceData{..} = (\balanceDataBalance -> BalanceData { balanceDataBalance, ..} ) <$> f balanceDataBalance
{-# INLINE balanceDataBalanceL #-}

-- | 'balanceDataAvailable' Lens
balanceDataAvailableL :: Lens_' BalanceData (Maybe Float)
balanceDataAvailableL f BalanceData{..} = (\balanceDataAvailable -> BalanceData { balanceDataAvailable, ..} ) <$> f balanceDataAvailable
{-# INLINE balanceDataAvailableL #-}

-- | 'balanceDataLocked' Lens
balanceDataLockedL :: Lens_' BalanceData (Maybe Float)
balanceDataLockedL f BalanceData{..} = (\balanceDataLocked -> BalanceData { balanceDataLocked, ..} ) <$> f balanceDataLocked
{-# INLINE balanceDataLockedL #-}

-- | 'balanceDataUpdateOrigin' Lens
balanceDataUpdateOriginL :: Lens_' BalanceData (Maybe E'UpdateOrigin)
balanceDataUpdateOriginL f BalanceData{..} = (\balanceDataUpdateOrigin -> BalanceData { balanceDataUpdateOrigin, ..} ) <$> f balanceDataUpdateOrigin
{-# INLINE balanceDataUpdateOriginL #-}



-- * Message

-- | 'messageType' Lens
messageTypeL :: Lens_' Message (Maybe Text)
messageTypeL f Message{..} = (\messageType -> Message { messageType, ..} ) <$> f messageType
{-# INLINE messageTypeL #-}

-- | 'messageSeverity' Lens
messageSeverityL :: Lens_' Message (Maybe Severity)
messageSeverityL f Message{..} = (\messageSeverity -> Message { messageSeverity, ..} ) <$> f messageSeverity
{-# INLINE messageSeverityL #-}

-- | 'messageExchangeId' Lens
messageExchangeIdL :: Lens_' Message (Maybe Text)
messageExchangeIdL f Message{..} = (\messageExchangeId -> Message { messageExchangeId, ..} ) <$> f messageExchangeId
{-# INLINE messageExchangeIdL #-}

-- | 'messageMessage' Lens
messageMessageL :: Lens_' Message (Maybe Text)
messageMessageL f Message{..} = (\messageMessage -> Message { messageMessage, ..} ) <$> f messageMessage
{-# INLINE messageMessageL #-}



-- * OrdSide



-- * OrdStatus



-- * OrdType



-- * OrderCancelAllRequest

-- | 'orderCancelAllRequestExchangeId' Lens
orderCancelAllRequestExchangeIdL :: Lens_' OrderCancelAllRequest (Text)
orderCancelAllRequestExchangeIdL f OrderCancelAllRequest{..} = (\orderCancelAllRequestExchangeId -> OrderCancelAllRequest { orderCancelAllRequestExchangeId, ..} ) <$> f orderCancelAllRequestExchangeId
{-# INLINE orderCancelAllRequestExchangeIdL #-}



-- * OrderCancelSingleRequest

-- | 'orderCancelSingleRequestExchangeId' Lens
orderCancelSingleRequestExchangeIdL :: Lens_' OrderCancelSingleRequest (Text)
orderCancelSingleRequestExchangeIdL f OrderCancelSingleRequest{..} = (\orderCancelSingleRequestExchangeId -> OrderCancelSingleRequest { orderCancelSingleRequestExchangeId, ..} ) <$> f orderCancelSingleRequestExchangeId
{-# INLINE orderCancelSingleRequestExchangeIdL #-}

-- | 'orderCancelSingleRequestExchangeOrderId' Lens
orderCancelSingleRequestExchangeOrderIdL :: Lens_' OrderCancelSingleRequest (Maybe Text)
orderCancelSingleRequestExchangeOrderIdL f OrderCancelSingleRequest{..} = (\orderCancelSingleRequestExchangeOrderId -> OrderCancelSingleRequest { orderCancelSingleRequestExchangeOrderId, ..} ) <$> f orderCancelSingleRequestExchangeOrderId
{-# INLINE orderCancelSingleRequestExchangeOrderIdL #-}

-- | 'orderCancelSingleRequestClientOrderId' Lens
orderCancelSingleRequestClientOrderIdL :: Lens_' OrderCancelSingleRequest (Maybe Text)
orderCancelSingleRequestClientOrderIdL f OrderCancelSingleRequest{..} = (\orderCancelSingleRequestClientOrderId -> OrderCancelSingleRequest { orderCancelSingleRequestClientOrderId, ..} ) <$> f orderCancelSingleRequestClientOrderId
{-# INLINE orderCancelSingleRequestClientOrderIdL #-}



-- * OrderExecutionReport

-- | 'orderExecutionReportExchangeId' Lens
orderExecutionReportExchangeIdL :: Lens_' OrderExecutionReport (Text)
orderExecutionReportExchangeIdL f OrderExecutionReport{..} = (\orderExecutionReportExchangeId -> OrderExecutionReport { orderExecutionReportExchangeId, ..} ) <$> f orderExecutionReportExchangeId
{-# INLINE orderExecutionReportExchangeIdL #-}

-- | 'orderExecutionReportClientOrderId' Lens
orderExecutionReportClientOrderIdL :: Lens_' OrderExecutionReport (Text)
orderExecutionReportClientOrderIdL f OrderExecutionReport{..} = (\orderExecutionReportClientOrderId -> OrderExecutionReport { orderExecutionReportClientOrderId, ..} ) <$> f orderExecutionReportClientOrderId
{-# INLINE orderExecutionReportClientOrderIdL #-}

-- | 'orderExecutionReportSymbolExchange' Lens
orderExecutionReportSymbolExchangeL :: Lens_' OrderExecutionReport (Maybe Text)
orderExecutionReportSymbolExchangeL f OrderExecutionReport{..} = (\orderExecutionReportSymbolExchange -> OrderExecutionReport { orderExecutionReportSymbolExchange, ..} ) <$> f orderExecutionReportSymbolExchange
{-# INLINE orderExecutionReportSymbolExchangeL #-}

-- | 'orderExecutionReportSymbolCoinapi' Lens
orderExecutionReportSymbolCoinapiL :: Lens_' OrderExecutionReport (Maybe Text)
orderExecutionReportSymbolCoinapiL f OrderExecutionReport{..} = (\orderExecutionReportSymbolCoinapi -> OrderExecutionReport { orderExecutionReportSymbolCoinapi, ..} ) <$> f orderExecutionReportSymbolCoinapi
{-# INLINE orderExecutionReportSymbolCoinapiL #-}

-- | 'orderExecutionReportAmountOrder' Lens
orderExecutionReportAmountOrderL :: Lens_' OrderExecutionReport (Double)
orderExecutionReportAmountOrderL f OrderExecutionReport{..} = (\orderExecutionReportAmountOrder -> OrderExecutionReport { orderExecutionReportAmountOrder, ..} ) <$> f orderExecutionReportAmountOrder
{-# INLINE orderExecutionReportAmountOrderL #-}

-- | 'orderExecutionReportPrice' Lens
orderExecutionReportPriceL :: Lens_' OrderExecutionReport (Double)
orderExecutionReportPriceL f OrderExecutionReport{..} = (\orderExecutionReportPrice -> OrderExecutionReport { orderExecutionReportPrice, ..} ) <$> f orderExecutionReportPrice
{-# INLINE orderExecutionReportPriceL #-}

-- | 'orderExecutionReportSide' Lens
orderExecutionReportSideL :: Lens_' OrderExecutionReport (OrdSide)
orderExecutionReportSideL f OrderExecutionReport{..} = (\orderExecutionReportSide -> OrderExecutionReport { orderExecutionReportSide, ..} ) <$> f orderExecutionReportSide
{-# INLINE orderExecutionReportSideL #-}

-- | 'orderExecutionReportOrderType' Lens
orderExecutionReportOrderTypeL :: Lens_' OrderExecutionReport (OrdType)
orderExecutionReportOrderTypeL f OrderExecutionReport{..} = (\orderExecutionReportOrderType -> OrderExecutionReport { orderExecutionReportOrderType, ..} ) <$> f orderExecutionReportOrderType
{-# INLINE orderExecutionReportOrderTypeL #-}

-- | 'orderExecutionReportTimeInForce' Lens
orderExecutionReportTimeInForceL :: Lens_' OrderExecutionReport (TimeInForce)
orderExecutionReportTimeInForceL f OrderExecutionReport{..} = (\orderExecutionReportTimeInForce -> OrderExecutionReport { orderExecutionReportTimeInForce, ..} ) <$> f orderExecutionReportTimeInForce
{-# INLINE orderExecutionReportTimeInForceL #-}

-- | 'orderExecutionReportExpireTime' Lens
orderExecutionReportExpireTimeL :: Lens_' OrderExecutionReport (Maybe Date)
orderExecutionReportExpireTimeL f OrderExecutionReport{..} = (\orderExecutionReportExpireTime -> OrderExecutionReport { orderExecutionReportExpireTime, ..} ) <$> f orderExecutionReportExpireTime
{-# INLINE orderExecutionReportExpireTimeL #-}

-- | 'orderExecutionReportExecInst' Lens
orderExecutionReportExecInstL :: Lens_' OrderExecutionReport (Maybe [E'ExecInst])
orderExecutionReportExecInstL f OrderExecutionReport{..} = (\orderExecutionReportExecInst -> OrderExecutionReport { orderExecutionReportExecInst, ..} ) <$> f orderExecutionReportExecInst
{-# INLINE orderExecutionReportExecInstL #-}

-- | 'orderExecutionReportClientOrderIdFormatExchange' Lens
orderExecutionReportClientOrderIdFormatExchangeL :: Lens_' OrderExecutionReport (Text)
orderExecutionReportClientOrderIdFormatExchangeL f OrderExecutionReport{..} = (\orderExecutionReportClientOrderIdFormatExchange -> OrderExecutionReport { orderExecutionReportClientOrderIdFormatExchange, ..} ) <$> f orderExecutionReportClientOrderIdFormatExchange
{-# INLINE orderExecutionReportClientOrderIdFormatExchangeL #-}

-- | 'orderExecutionReportExchangeOrderId' Lens
orderExecutionReportExchangeOrderIdL :: Lens_' OrderExecutionReport (Maybe Text)
orderExecutionReportExchangeOrderIdL f OrderExecutionReport{..} = (\orderExecutionReportExchangeOrderId -> OrderExecutionReport { orderExecutionReportExchangeOrderId, ..} ) <$> f orderExecutionReportExchangeOrderId
{-# INLINE orderExecutionReportExchangeOrderIdL #-}

-- | 'orderExecutionReportAmountOpen' Lens
orderExecutionReportAmountOpenL :: Lens_' OrderExecutionReport (Double)
orderExecutionReportAmountOpenL f OrderExecutionReport{..} = (\orderExecutionReportAmountOpen -> OrderExecutionReport { orderExecutionReportAmountOpen, ..} ) <$> f orderExecutionReportAmountOpen
{-# INLINE orderExecutionReportAmountOpenL #-}

-- | 'orderExecutionReportAmountFilled' Lens
orderExecutionReportAmountFilledL :: Lens_' OrderExecutionReport (Double)
orderExecutionReportAmountFilledL f OrderExecutionReport{..} = (\orderExecutionReportAmountFilled -> OrderExecutionReport { orderExecutionReportAmountFilled, ..} ) <$> f orderExecutionReportAmountFilled
{-# INLINE orderExecutionReportAmountFilledL #-}

-- | 'orderExecutionReportStatus' Lens
orderExecutionReportStatusL :: Lens_' OrderExecutionReport (OrdStatus)
orderExecutionReportStatusL f OrderExecutionReport{..} = (\orderExecutionReportStatus -> OrderExecutionReport { orderExecutionReportStatus, ..} ) <$> f orderExecutionReportStatus
{-# INLINE orderExecutionReportStatusL #-}

-- | 'orderExecutionReportTimeOrder' Lens
orderExecutionReportTimeOrderL :: Lens_' OrderExecutionReport ([[Text]])
orderExecutionReportTimeOrderL f OrderExecutionReport{..} = (\orderExecutionReportTimeOrder -> OrderExecutionReport { orderExecutionReportTimeOrder, ..} ) <$> f orderExecutionReportTimeOrder
{-# INLINE orderExecutionReportTimeOrderL #-}

-- | 'orderExecutionReportErrorMessage' Lens
orderExecutionReportErrorMessageL :: Lens_' OrderExecutionReport (Maybe Text)
orderExecutionReportErrorMessageL f OrderExecutionReport{..} = (\orderExecutionReportErrorMessage -> OrderExecutionReport { orderExecutionReportErrorMessage, ..} ) <$> f orderExecutionReportErrorMessage
{-# INLINE orderExecutionReportErrorMessageL #-}



-- * OrderExecutionReportAllOf

-- | 'orderExecutionReportAllOfClientOrderIdFormatExchange' Lens
orderExecutionReportAllOfClientOrderIdFormatExchangeL :: Lens_' OrderExecutionReportAllOf (Text)
orderExecutionReportAllOfClientOrderIdFormatExchangeL f OrderExecutionReportAllOf{..} = (\orderExecutionReportAllOfClientOrderIdFormatExchange -> OrderExecutionReportAllOf { orderExecutionReportAllOfClientOrderIdFormatExchange, ..} ) <$> f orderExecutionReportAllOfClientOrderIdFormatExchange
{-# INLINE orderExecutionReportAllOfClientOrderIdFormatExchangeL #-}

-- | 'orderExecutionReportAllOfExchangeOrderId' Lens
orderExecutionReportAllOfExchangeOrderIdL :: Lens_' OrderExecutionReportAllOf (Maybe Text)
orderExecutionReportAllOfExchangeOrderIdL f OrderExecutionReportAllOf{..} = (\orderExecutionReportAllOfExchangeOrderId -> OrderExecutionReportAllOf { orderExecutionReportAllOfExchangeOrderId, ..} ) <$> f orderExecutionReportAllOfExchangeOrderId
{-# INLINE orderExecutionReportAllOfExchangeOrderIdL #-}

-- | 'orderExecutionReportAllOfAmountOpen' Lens
orderExecutionReportAllOfAmountOpenL :: Lens_' OrderExecutionReportAllOf (Double)
orderExecutionReportAllOfAmountOpenL f OrderExecutionReportAllOf{..} = (\orderExecutionReportAllOfAmountOpen -> OrderExecutionReportAllOf { orderExecutionReportAllOfAmountOpen, ..} ) <$> f orderExecutionReportAllOfAmountOpen
{-# INLINE orderExecutionReportAllOfAmountOpenL #-}

-- | 'orderExecutionReportAllOfAmountFilled' Lens
orderExecutionReportAllOfAmountFilledL :: Lens_' OrderExecutionReportAllOf (Double)
orderExecutionReportAllOfAmountFilledL f OrderExecutionReportAllOf{..} = (\orderExecutionReportAllOfAmountFilled -> OrderExecutionReportAllOf { orderExecutionReportAllOfAmountFilled, ..} ) <$> f orderExecutionReportAllOfAmountFilled
{-# INLINE orderExecutionReportAllOfAmountFilledL #-}

-- | 'orderExecutionReportAllOfStatus' Lens
orderExecutionReportAllOfStatusL :: Lens_' OrderExecutionReportAllOf (OrdStatus)
orderExecutionReportAllOfStatusL f OrderExecutionReportAllOf{..} = (\orderExecutionReportAllOfStatus -> OrderExecutionReportAllOf { orderExecutionReportAllOfStatus, ..} ) <$> f orderExecutionReportAllOfStatus
{-# INLINE orderExecutionReportAllOfStatusL #-}

-- | 'orderExecutionReportAllOfTimeOrder' Lens
orderExecutionReportAllOfTimeOrderL :: Lens_' OrderExecutionReportAllOf ([[Text]])
orderExecutionReportAllOfTimeOrderL f OrderExecutionReportAllOf{..} = (\orderExecutionReportAllOfTimeOrder -> OrderExecutionReportAllOf { orderExecutionReportAllOfTimeOrder, ..} ) <$> f orderExecutionReportAllOfTimeOrder
{-# INLINE orderExecutionReportAllOfTimeOrderL #-}

-- | 'orderExecutionReportAllOfErrorMessage' Lens
orderExecutionReportAllOfErrorMessageL :: Lens_' OrderExecutionReportAllOf (Maybe Text)
orderExecutionReportAllOfErrorMessageL f OrderExecutionReportAllOf{..} = (\orderExecutionReportAllOfErrorMessage -> OrderExecutionReportAllOf { orderExecutionReportAllOfErrorMessage, ..} ) <$> f orderExecutionReportAllOfErrorMessage
{-# INLINE orderExecutionReportAllOfErrorMessageL #-}



-- * OrderNewSingleRequest

-- | 'orderNewSingleRequestExchangeId' Lens
orderNewSingleRequestExchangeIdL :: Lens_' OrderNewSingleRequest (Text)
orderNewSingleRequestExchangeIdL f OrderNewSingleRequest{..} = (\orderNewSingleRequestExchangeId -> OrderNewSingleRequest { orderNewSingleRequestExchangeId, ..} ) <$> f orderNewSingleRequestExchangeId
{-# INLINE orderNewSingleRequestExchangeIdL #-}

-- | 'orderNewSingleRequestClientOrderId' Lens
orderNewSingleRequestClientOrderIdL :: Lens_' OrderNewSingleRequest (Text)
orderNewSingleRequestClientOrderIdL f OrderNewSingleRequest{..} = (\orderNewSingleRequestClientOrderId -> OrderNewSingleRequest { orderNewSingleRequestClientOrderId, ..} ) <$> f orderNewSingleRequestClientOrderId
{-# INLINE orderNewSingleRequestClientOrderIdL #-}

-- | 'orderNewSingleRequestSymbolExchange' Lens
orderNewSingleRequestSymbolExchangeL :: Lens_' OrderNewSingleRequest (Maybe Text)
orderNewSingleRequestSymbolExchangeL f OrderNewSingleRequest{..} = (\orderNewSingleRequestSymbolExchange -> OrderNewSingleRequest { orderNewSingleRequestSymbolExchange, ..} ) <$> f orderNewSingleRequestSymbolExchange
{-# INLINE orderNewSingleRequestSymbolExchangeL #-}

-- | 'orderNewSingleRequestSymbolCoinapi' Lens
orderNewSingleRequestSymbolCoinapiL :: Lens_' OrderNewSingleRequest (Maybe Text)
orderNewSingleRequestSymbolCoinapiL f OrderNewSingleRequest{..} = (\orderNewSingleRequestSymbolCoinapi -> OrderNewSingleRequest { orderNewSingleRequestSymbolCoinapi, ..} ) <$> f orderNewSingleRequestSymbolCoinapi
{-# INLINE orderNewSingleRequestSymbolCoinapiL #-}

-- | 'orderNewSingleRequestAmountOrder' Lens
orderNewSingleRequestAmountOrderL :: Lens_' OrderNewSingleRequest (Double)
orderNewSingleRequestAmountOrderL f OrderNewSingleRequest{..} = (\orderNewSingleRequestAmountOrder -> OrderNewSingleRequest { orderNewSingleRequestAmountOrder, ..} ) <$> f orderNewSingleRequestAmountOrder
{-# INLINE orderNewSingleRequestAmountOrderL #-}

-- | 'orderNewSingleRequestPrice' Lens
orderNewSingleRequestPriceL :: Lens_' OrderNewSingleRequest (Double)
orderNewSingleRequestPriceL f OrderNewSingleRequest{..} = (\orderNewSingleRequestPrice -> OrderNewSingleRequest { orderNewSingleRequestPrice, ..} ) <$> f orderNewSingleRequestPrice
{-# INLINE orderNewSingleRequestPriceL #-}

-- | 'orderNewSingleRequestSide' Lens
orderNewSingleRequestSideL :: Lens_' OrderNewSingleRequest (OrdSide)
orderNewSingleRequestSideL f OrderNewSingleRequest{..} = (\orderNewSingleRequestSide -> OrderNewSingleRequest { orderNewSingleRequestSide, ..} ) <$> f orderNewSingleRequestSide
{-# INLINE orderNewSingleRequestSideL #-}

-- | 'orderNewSingleRequestOrderType' Lens
orderNewSingleRequestOrderTypeL :: Lens_' OrderNewSingleRequest (OrdType)
orderNewSingleRequestOrderTypeL f OrderNewSingleRequest{..} = (\orderNewSingleRequestOrderType -> OrderNewSingleRequest { orderNewSingleRequestOrderType, ..} ) <$> f orderNewSingleRequestOrderType
{-# INLINE orderNewSingleRequestOrderTypeL #-}

-- | 'orderNewSingleRequestTimeInForce' Lens
orderNewSingleRequestTimeInForceL :: Lens_' OrderNewSingleRequest (TimeInForce)
orderNewSingleRequestTimeInForceL f OrderNewSingleRequest{..} = (\orderNewSingleRequestTimeInForce -> OrderNewSingleRequest { orderNewSingleRequestTimeInForce, ..} ) <$> f orderNewSingleRequestTimeInForce
{-# INLINE orderNewSingleRequestTimeInForceL #-}

-- | 'orderNewSingleRequestExpireTime' Lens
orderNewSingleRequestExpireTimeL :: Lens_' OrderNewSingleRequest (Maybe Date)
orderNewSingleRequestExpireTimeL f OrderNewSingleRequest{..} = (\orderNewSingleRequestExpireTime -> OrderNewSingleRequest { orderNewSingleRequestExpireTime, ..} ) <$> f orderNewSingleRequestExpireTime
{-# INLINE orderNewSingleRequestExpireTimeL #-}

-- | 'orderNewSingleRequestExecInst' Lens
orderNewSingleRequestExecInstL :: Lens_' OrderNewSingleRequest (Maybe [E'ExecInst])
orderNewSingleRequestExecInstL f OrderNewSingleRequest{..} = (\orderNewSingleRequestExecInst -> OrderNewSingleRequest { orderNewSingleRequestExecInst, ..} ) <$> f orderNewSingleRequestExecInst
{-# INLINE orderNewSingleRequestExecInstL #-}



-- * Position

-- | 'positionExchangeId' Lens
positionExchangeIdL :: Lens_' Position (Maybe Text)
positionExchangeIdL f Position{..} = (\positionExchangeId -> Position { positionExchangeId, ..} ) <$> f positionExchangeId
{-# INLINE positionExchangeIdL #-}

-- | 'positionData' Lens
positionDataL :: Lens_' Position (Maybe [PositionData])
positionDataL f Position{..} = (\positionData -> Position { positionData, ..} ) <$> f positionData
{-# INLINE positionDataL #-}



-- * PositionData

-- | 'positionDataSymbolExchange' Lens
positionDataSymbolExchangeL :: Lens_' PositionData (Maybe Text)
positionDataSymbolExchangeL f PositionData{..} = (\positionDataSymbolExchange -> PositionData { positionDataSymbolExchange, ..} ) <$> f positionDataSymbolExchange
{-# INLINE positionDataSymbolExchangeL #-}

-- | 'positionDataSymbolCoinapi' Lens
positionDataSymbolCoinapiL :: Lens_' PositionData (Maybe Text)
positionDataSymbolCoinapiL f PositionData{..} = (\positionDataSymbolCoinapi -> PositionData { positionDataSymbolCoinapi, ..} ) <$> f positionDataSymbolCoinapi
{-# INLINE positionDataSymbolCoinapiL #-}

-- | 'positionDataAvgEntryPrice' Lens
positionDataAvgEntryPriceL :: Lens_' PositionData (Maybe Double)
positionDataAvgEntryPriceL f PositionData{..} = (\positionDataAvgEntryPrice -> PositionData { positionDataAvgEntryPrice, ..} ) <$> f positionDataAvgEntryPrice
{-# INLINE positionDataAvgEntryPriceL #-}

-- | 'positionDataQuantity' Lens
positionDataQuantityL :: Lens_' PositionData (Maybe Double)
positionDataQuantityL f PositionData{..} = (\positionDataQuantity -> PositionData { positionDataQuantity, ..} ) <$> f positionDataQuantity
{-# INLINE positionDataQuantityL #-}

-- | 'positionDataSide' Lens
positionDataSideL :: Lens_' PositionData (Maybe OrdSide)
positionDataSideL f PositionData{..} = (\positionDataSide -> PositionData { positionDataSide, ..} ) <$> f positionDataSide
{-# INLINE positionDataSideL #-}

-- | 'positionDataUnrealizedPnl' Lens
positionDataUnrealizedPnlL :: Lens_' PositionData (Maybe Double)
positionDataUnrealizedPnlL f PositionData{..} = (\positionDataUnrealizedPnl -> PositionData { positionDataUnrealizedPnl, ..} ) <$> f positionDataUnrealizedPnl
{-# INLINE positionDataUnrealizedPnlL #-}

-- | 'positionDataLeverage' Lens
positionDataLeverageL :: Lens_' PositionData (Maybe Double)
positionDataLeverageL f PositionData{..} = (\positionDataLeverage -> PositionData { positionDataLeverage, ..} ) <$> f positionDataLeverage
{-# INLINE positionDataLeverageL #-}

-- | 'positionDataCrossMargin' Lens
positionDataCrossMarginL :: Lens_' PositionData (Maybe Bool)
positionDataCrossMarginL f PositionData{..} = (\positionDataCrossMargin -> PositionData { positionDataCrossMargin, ..} ) <$> f positionDataCrossMargin
{-# INLINE positionDataCrossMarginL #-}

-- | 'positionDataLiquidationPrice' Lens
positionDataLiquidationPriceL :: Lens_' PositionData (Maybe Double)
positionDataLiquidationPriceL f PositionData{..} = (\positionDataLiquidationPrice -> PositionData { positionDataLiquidationPrice, ..} ) <$> f positionDataLiquidationPrice
{-# INLINE positionDataLiquidationPriceL #-}

-- | 'positionDataRawData' Lens
positionDataRawDataL :: Lens_' PositionData (Maybe A.Value)
positionDataRawDataL f PositionData{..} = (\positionDataRawData -> PositionData { positionDataRawData, ..} ) <$> f positionDataRawData
{-# INLINE positionDataRawDataL #-}



-- * Severity



-- * TimeInForce



-- * ValidationError

-- | 'validationErrorType' Lens
validationErrorTypeL :: Lens_' ValidationError (Maybe Text)
validationErrorTypeL f ValidationError{..} = (\validationErrorType -> ValidationError { validationErrorType, ..} ) <$> f validationErrorType
{-# INLINE validationErrorTypeL #-}

-- | 'validationErrorTitle' Lens
validationErrorTitleL :: Lens_' ValidationError (Maybe Text)
validationErrorTitleL f ValidationError{..} = (\validationErrorTitle -> ValidationError { validationErrorTitle, ..} ) <$> f validationErrorTitle
{-# INLINE validationErrorTitleL #-}

-- | 'validationErrorStatus' Lens
validationErrorStatusL :: Lens_' ValidationError (Maybe Double)
validationErrorStatusL f ValidationError{..} = (\validationErrorStatus -> ValidationError { validationErrorStatus, ..} ) <$> f validationErrorStatus
{-# INLINE validationErrorStatusL #-}

-- | 'validationErrorTraceId' Lens
validationErrorTraceIdL :: Lens_' ValidationError (Maybe Text)
validationErrorTraceIdL f ValidationError{..} = (\validationErrorTraceId -> ValidationError { validationErrorTraceId, ..} ) <$> f validationErrorTraceId
{-# INLINE validationErrorTraceIdL #-}

-- | 'validationErrorErrors' Lens
validationErrorErrorsL :: Lens_' ValidationError (Maybe Text)
validationErrorErrorsL f ValidationError{..} = (\validationErrorErrors -> ValidationError { validationErrorErrors, ..} ) <$> f validationErrorErrors
{-# INLINE validationErrorErrorsL #-}


