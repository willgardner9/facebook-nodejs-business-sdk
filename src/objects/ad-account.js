/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AdActivity from './ad-activity';
import AdPlacePageSet from './ad-place-page-set';
import AdStudy from './ad-study';
import AdCreative from './ad-creative';
import AdImage from './ad-image';
import AdLabel from './ad-label';
import PlayableContent from './playable-content';
import AdAccountAdRulesHistory from './ad-account-ad-rules-history';
import AdRule from './ad-rule';
import Ad from './ad';
import AdAccountAdVolume from './ad-account-ad-volume';
import AdSet from './ad-set';
import AdsPixel from './ads-pixel';
import Application from './application';
import AdVideo from './ad-video';
import Business from './business';
import AssignedUser from './assigned-user';
import Campaign from './campaign';
import AsyncRequest from './async-request';
import AdAsyncRequestSet from './ad-async-request-set';
import BrandAudience from './brand-audience';
import BroadTargetingCategories from './broad-targeting-categories';
import BusinessProject from './business-project';
import ContentDeliveryReport from './content-delivery-report';
import CustomAudience from './custom-audience';
import CustomAudiencesTOS from './custom-audiences-tos';
import CustomConversion from './custom-conversion';
import AdAccountDeliveryEstimate from './ad-account-delivery-estimate';
import AdPreview from './ad-preview';
import AdsInsights from './ads-insights';
import AdReportRun from './ad-report-run';
import InstagramUser from './instagram-user';
import AdAccountMatchedSearchApplicationsEdgeData from './ad-account-matched-search-applications-edge-data';
import AdAccountMaxBid from './ad-account-max-bid';
import MinimumBudget from './minimum-budget';
import OfflineConversionDataSet from './offline-conversion-data-set';
import BusinessOwnedObjectOnBehalfOfRequest from './business-owned-object-on-behalf-of-request';
import Page from './page';
import PublisherBlockList from './publisher-block-list';
import AdAccountReachEstimate from './ad-account-reach-estimate';
import ReachFrequencyPrediction from './reach-frequency-prediction';
import AdAccountRoas from './ad-account-roas';
import SavedAudience from './saved-audience';
import AdAccountSubscribedApps from './ad-account-subscribed-apps';
import AdAccountTargetingUnified from './ad-account-targeting-unified';
import TargetingSentenceLine from './targeting-sentence-line';
import AdAccountTrackingData from './ad-account-tracking-data';
import AdAccountUser from './ad-account-user';

/**
 * AdAccount
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccount extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      account_id: 'account_id',
      account_status: 'account_status',
      ad_account_creation_request: 'ad_account_creation_request',
      ad_account_promotable_objects: 'ad_account_promotable_objects',
      age: 'age',
      agency_client_declaration: 'agency_client_declaration',
      amount_spent: 'amount_spent',
      attribution_spec: 'attribution_spec',
      balance: 'balance',
      business: 'business',
      business_city: 'business_city',
      business_country_code: 'business_country_code',
      business_name: 'business_name',
      business_state: 'business_state',
      business_street: 'business_street',
      business_street2: 'business_street2',
      business_zip: 'business_zip',
      can_create_brand_lift_study: 'can_create_brand_lift_study',
      capabilities: 'capabilities',
      created_time: 'created_time',
      currency: 'currency',
      disable_reason: 'disable_reason',
      end_advertiser: 'end_advertiser',
      end_advertiser_name: 'end_advertiser_name',
      extended_credit_invoice_group: 'extended_credit_invoice_group',
      failed_delivery_checks: 'failed_delivery_checks',
      fb_entity: 'fb_entity',
      funding_source: 'funding_source',
      funding_source_details: 'funding_source_details',
      has_migrated_permissions: 'has_migrated_permissions',
      has_page_authorized_adaccount: 'has_page_authorized_adaccount',
      id: 'id',
      io_number: 'io_number',
      is_attribution_spec_system_default: 'is_attribution_spec_system_default',
      is_direct_deals_enabled: 'is_direct_deals_enabled',
      is_in_3ds_authorization_enabled_market: 'is_in_3ds_authorization_enabled_market',
      is_in_middle_of_local_entity_migration: 'is_in_middle_of_local_entity_migration',
      is_notifications_enabled: 'is_notifications_enabled',
      is_personal: 'is_personal',
      is_prepay_account: 'is_prepay_account',
      is_tax_id_required: 'is_tax_id_required',
      line_numbers: 'line_numbers',
      media_agency: 'media_agency',
      min_campaign_group_spend_cap: 'min_campaign_group_spend_cap',
      min_daily_budget: 'min_daily_budget',
      name: 'name',
      offsite_pixels_tos_accepted: 'offsite_pixels_tos_accepted',
      owner: 'owner',
      partner: 'partner',
      rf_spec: 'rf_spec',
      show_checkout_experience: 'show_checkout_experience',
      spend_cap: 'spend_cap',
      tax_id: 'tax_id',
      tax_id_status: 'tax_id_status',
      tax_id_type: 'tax_id_type',
      timezone_id: 'timezone_id',
      timezone_name: 'timezone_name',
      timezone_offset_hours_utc: 'timezone_offset_hours_utc',
      tos_accepted: 'tos_accepted',
      user_tasks: 'user_tasks',
      user_tos_accepted: 'user_tos_accepted',
    });
  }

  static get Currency (): Object {
    return Object.freeze({
      aed: 'AED',
      ars: 'ARS',
      aud: 'AUD',
      bdt: 'BDT',
      bob: 'BOB',
      brl: 'BRL',
      cad: 'CAD',
      chf: 'CHF',
      clp: 'CLP',
      cny: 'CNY',
      cop: 'COP',
      crc: 'CRC',
      czk: 'CZK',
      dkk: 'DKK',
      dzd: 'DZD',
      egp: 'EGP',
      eur: 'EUR',
      gbp: 'GBP',
      gtq: 'GTQ',
      hkd: 'HKD',
      hnl: 'HNL',
      huf: 'HUF',
      idr: 'IDR',
      ils: 'ILS',
      inr: 'INR',
      isk: 'ISK',
      jpy: 'JPY',
      kes: 'KES',
      krw: 'KRW',
      mop: 'MOP',
      mxn: 'MXN',
      myr: 'MYR',
      ngn: 'NGN',
      nio: 'NIO',
      nok: 'NOK',
      nzd: 'NZD',
      pen: 'PEN',
      php: 'PHP',
      pkr: 'PKR',
      pln: 'PLN',
      pyg: 'PYG',
      qar: 'QAR',
      ron: 'RON',
      rub: 'RUB',
      sar: 'SAR',
      sek: 'SEK',
      sgd: 'SGD',
      thb: 'THB',
      try: 'TRY',
      twd: 'TWD',
      usd: 'USD',
      uyu: 'UYU',
      vnd: 'VND',
      zar: 'ZAR',
    });
  }
  static get PermittedTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      creative: 'CREATIVE',
      draft: 'DRAFT',
      fb_employee_dso_advertise: 'FB_EMPLOYEE_DSO_ADVERTISE',
      manage: 'MANAGE',
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      creative: 'CREATIVE',
      draft: 'DRAFT',
      fb_employee_dso_advertise: 'FB_EMPLOYEE_DSO_ADVERTISE',
      manage: 'MANAGE',
    });
  }
  static get ClaimObjective (): Object {
    return Object.freeze({
      automotive_model: 'AUTOMOTIVE_MODEL',
      collaborative_ads: 'COLLABORATIVE_ADS',
      home_listing: 'HOME_LISTING',
      media_title: 'MEDIA_TITLE',
      product: 'PRODUCT',
      travel: 'TRAVEL',
      vehicle: 'VEHICLE',
      vehicle_offer: 'VEHICLE_OFFER',
    });
  }
  static get ContentType (): Object {
    return Object.freeze({
      automotive_model: 'AUTOMOTIVE_MODEL',
      destination: 'DESTINATION',
      flight: 'FLIGHT',
      home_listing: 'HOME_LISTING',
      hotel: 'HOTEL',
      media_title: 'MEDIA_TITLE',
      product: 'PRODUCT',
      vehicle: 'VEHICLE',
      vehicle_offer: 'VEHICLE_OFFER',
    });
  }
  static get Subtype (): Object {
    return Object.freeze({
      app: 'APP',
      bag_of_accounts: 'BAG_OF_ACCOUNTS',
      claim: 'CLAIM',
      custom: 'CUSTOM',
      engagement: 'ENGAGEMENT',
      fox: 'FOX',
      lookalike: 'LOOKALIKE',
      managed: 'MANAGED',
      measurement: 'MEASUREMENT',
      offline_conversion: 'OFFLINE_CONVERSION',
      partner: 'PARTNER',
      regulated_categories_audience: 'REGULATED_CATEGORIES_AUDIENCE',
      study_rule_audience: 'STUDY_RULE_AUDIENCE',
      video: 'VIDEO',
      website: 'WEBSITE',
    });
  }

  getActivities (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdActivity,
      fields,
      params,
      fetchFirstPage,
      '/activities'
    );
  }

  getAdPlacePageSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdPlacePageSet,
      fields,
      params,
      fetchFirstPage,
      '/ad_place_page_sets'
    );
  }

  createAdPlacePageSet (fields: Array<string>, params: Object = {}): Promise<AdPlacePageSet> {
    return this.createEdge(
      '/ad_place_page_sets',
      fields,
      params,
      AdPlacePageSet
    );
  }

  createAdPlacePageSetsAsync (fields: Array<string>, params: Object = {}): Promise<AdPlacePageSet> {
    return this.createEdge(
      '/ad_place_page_sets_async',
      fields,
      params,
      AdPlacePageSet
    );
  }

  deleteAdSets (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/ad_sets',
      params
    );
  }

  getAdStudies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdStudy,
      fields,
      params,
      fetchFirstPage,
      '/ad_studies'
    );
  }

  getAdCreatives (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdCreative,
      fields,
      params,
      fetchFirstPage,
      '/adcreatives'
    );
  }

  createAdCreative (fields: Array<string>, params: Object = {}): Promise<AdCreative> {
    return this.createEdge(
      '/adcreatives',
      fields,
      params,
      AdCreative
    );
  }

  getAdCreativesByLabels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdCreative,
      fields,
      params,
      fetchFirstPage,
      '/adcreativesbylabels'
    );
  }

  deleteAdImages (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/adimages',
      params
    );
  }

  getAdImages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdImage,
      fields,
      params,
      fetchFirstPage,
      '/adimages'
    );
  }

  createAdImage (fields: Array<string>, params: Object = {}): Promise<AdImage> {
    return this.createEdge(
      '/adimages',
      fields,
      params,
      AdImage
    );
  }

  getAdLabels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdLabel,
      fields,
      params,
      fetchFirstPage,
      '/adlabels'
    );
  }

  createAdLabel (fields: Array<string>, params: Object = {}): Promise<AdLabel> {
    return this.createEdge(
      '/adlabels',
      fields,
      params,
      AdLabel
    );
  }

  getAdPlayables (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PlayableContent,
      fields,
      params,
      fetchFirstPage,
      '/adplayables'
    );
  }

  createAdPlayable (fields: Array<string>, params: Object = {}): Promise<PlayableContent> {
    return this.createEdge(
      '/adplayables',
      fields,
      params,
      PlayableContent
    );
  }

  getAdReportSchedules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/adreportschedules'
    );
  }

  createAdReportSchedule (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/adreportschedules',
      fields,
      params,
      
    );
  }

  getAdRulesHistory (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountAdRulesHistory,
      fields,
      params,
      fetchFirstPage,
      '/adrules_history'
    );
  }

  getAdRulesLibrary (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdRule,
      fields,
      params,
      fetchFirstPage,
      '/adrules_library'
    );
  }

  createAdRulesLibrary (fields: Array<string>, params: Object = {}): Promise<AdRule> {
    return this.createEdge(
      '/adrules_library',
      fields,
      params,
      AdRule
    );
  }

  deleteAds (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/ads',
      params
    );
  }

  getAds (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/ads'
    );
  }

  createAd (fields: Array<string>, params: Object = {}): Promise<Ad> {
    return this.createEdge(
      '/ads',
      fields,
      params,
      Ad
    );
  }

  getAdsVolume (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountAdVolume,
      fields,
      params,
      fetchFirstPage,
      '/ads_volume'
    );
  }

  getAdsByLabels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Ad,
      fields,
      params,
      fetchFirstPage,
      '/adsbylabels'
    );
  }

  getAdSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/adsets'
    );
  }

  createAdSet (fields: Array<string>, params: Object = {}): Promise<AdSet> {
    return this.createEdge(
      '/adsets',
      fields,
      params,
      AdSet
    );
  }

  getAdSetsByLabels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/adsetsbylabels'
    );
  }

  getAdsPixels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsPixel,
      fields,
      params,
      fetchFirstPage,
      '/adspixels'
    );
  }

  createAdsPixel (fields: Array<string>, params: Object = {}): Promise<AdsPixel> {
    return this.createEdge(
      '/adspixels',
      fields,
      params,
      AdsPixel
    );
  }

  getAdvertisableApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/advertisable_applications'
    );
  }

  deleteAdVideos (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/advideos',
      params
    );
  }

  getAdVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/advideos'
    );
  }

  createAdVideo (fields: Array<string>, params: Object = {}): Promise<AdVideo> {
    return this.createEdge(
      '/advideos',
      fields,
      params,
      AdVideo
    );
  }

  getAffectedAdSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/affectedadsets'
    );
  }

  deleteAgencies (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createAgency (fields: Array<string>, params: Object = {}): Promise<AdAccount> {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      AdAccount
    );
  }

  getApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/applications'
    );
  }

  deleteAssignedUsers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/assigned_users',
      params
    );
  }

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields: Array<string>, params: Object = {}): Promise<AdAccount> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      AdAccount
    );
  }

  createAsyncBatchRequest (fields: Array<string>, params: Object = {}): Promise<Campaign> {
    return this.createEdge(
      '/async_batch_requests',
      fields,
      params,
      Campaign
    );
  }

  getAsyncRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AsyncRequest,
      fields,
      params,
      fetchFirstPage,
      '/async_requests'
    );
  }

  getAsyncAdRequestSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAsyncRequestSet,
      fields,
      params,
      fetchFirstPage,
      '/asyncadrequestsets'
    );
  }

  createAsyncAdRequestSet (fields: Array<string>, params: Object = {}): Promise<AdAsyncRequestSet> {
    return this.createEdge(
      '/asyncadrequestsets',
      fields,
      params,
      AdAsyncRequestSet
    );
  }

  createAudienceReplace (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/audiencereplace',
      fields,
      params,
      
    );
  }

  createBatchReplace (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/batchreplace',
      fields,
      params,
      
    );
  }

  createBatchUpload (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/batchupload',
      fields,
      params,
      
    );
  }

  createBlockListDraft (fields: Array<string>, params: Object = {}): Promise<AdAccount> {
    return this.createEdge(
      '/block_list_drafts',
      fields,
      params,
      AdAccount
    );
  }

  getBrandAudiences (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BrandAudience,
      fields,
      params,
      fetchFirstPage,
      '/brand_audiences'
    );
  }

  getBroadTargetingCategories (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BroadTargetingCategories,
      fields,
      params,
      fetchFirstPage,
      '/broadtargetingcategories'
    );
  }

  getBusinessProjects (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessProject,
      fields,
      params,
      fetchFirstPage,
      '/businessprojects'
    );
  }

  deleteCampaigns (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/campaigns',
      params
    );
  }

  getCampaigns (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Campaign,
      fields,
      params,
      fetchFirstPage,
      '/campaigns'
    );
  }

  createCampaign (fields: Array<string>, params: Object = {}): Promise<Campaign> {
    return this.createEdge(
      '/campaigns',
      fields,
      params,
      Campaign
    );
  }

  getCampaignsByLabels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Campaign,
      fields,
      params,
      fetchFirstPage,
      '/campaignsbylabels'
    );
  }

  getContentDeliveryReport (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ContentDeliveryReport,
      fields,
      params,
      fetchFirstPage,
      '/content_delivery_report'
    );
  }

  getCustomAudiences (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomAudience,
      fields,
      params,
      fetchFirstPage,
      '/customaudiences'
    );
  }

  createCustomAudience (fields: Array<string>, params: Object = {}): Promise<CustomAudience> {
    return this.createEdge(
      '/customaudiences',
      fields,
      params,
      CustomAudience
    );
  }

  getCustomAudiencesTos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomAudiencesTOS,
      fields,
      params,
      fetchFirstPage,
      '/customaudiencestos'
    );
  }

  createCustomAudiencesTo (fields: Array<string>, params: Object = {}): Promise<AdAccount> {
    return this.createEdge(
      '/customaudiencestos',
      fields,
      params,
      AdAccount
    );
  }

  getCustomConversions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CustomConversion,
      fields,
      params,
      fetchFirstPage,
      '/customconversions'
    );
  }

  createCustomConversion (fields: Array<string>, params: Object = {}): Promise<CustomConversion> {
    return this.createEdge(
      '/customconversions',
      fields,
      params,
      CustomConversion
    );
  }

  createDeactivate (fields: Array<string>, params: Object = {}): Promise<AdAccount> {
    return this.createEdge(
      '/deactivate',
      fields,
      params,
      AdAccount
    );
  }

  getDeliveryEstimate (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountDeliveryEstimate,
      fields,
      params,
      fetchFirstPage,
      '/delivery_estimate'
    );
  }

  getDeprecatedTargetingAdSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdSet,
      fields,
      params,
      fetchFirstPage,
      '/deprecatedtargetingadsets'
    );
  }

  createEmailImport (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/emailimport',
      fields,
      params,
      
    );
  }

  getGeneratePreviews (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdPreview,
      fields,
      params,
      fetchFirstPage,
      '/generatepreviews'
    );
  }

  getImpactingAdStudies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdStudy,
      fields,
      params,
      fetchFirstPage,
      '/impacting_ad_studies'
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdsInsights,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getInsightsAsync (fields: Array<string>, params: Object = {}): Promise<AdReportRun> {
    return this.createEdge(
      '/insights',
      fields,
      params,
      AdReportRun
    );
  }

  getInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_accounts'
    );
  }

  getMatchedSearchApplications (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountMatchedSearchApplicationsEdgeData,
      fields,
      params,
      fetchFirstPage,
      '/matched_search_applications'
    );
  }

  getMaxBid (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountMaxBid,
      fields,
      params,
      fetchFirstPage,
      '/max_bid'
    );
  }

  getMinimumBudgets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MinimumBudget,
      fields,
      params,
      fetchFirstPage,
      '/minimum_budgets'
    );
  }

  getOfflineConversionDataSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      OfflineConversionDataSet,
      fields,
      params,
      fetchFirstPage,
      '/offline_conversion_data_sets'
    );
  }

  getOnBehalfRequests (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      BusinessOwnedObjectOnBehalfOfRequest,
      fields,
      params,
      fetchFirstPage,
      '/onbehalf_requests'
    );
  }

  createProductAudience (fields: Array<string>, params: Object = {}): Promise<CustomAudience> {
    return this.createEdge(
      '/product_audiences',
      fields,
      params,
      CustomAudience
    );
  }

  getPromotePages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/promote_pages'
    );
  }

  getPublisherBlockLists (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PublisherBlockList,
      fields,
      params,
      fetchFirstPage,
      '/publisher_block_lists'
    );
  }

  createPublisherBlockList (fields: Array<string>, params: Object = {}): Promise<PublisherBlockList> {
    return this.createEdge(
      '/publisher_block_lists',
      fields,
      params,
      PublisherBlockList
    );
  }

  getReachEstimate (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountReachEstimate,
      fields,
      params,
      fetchFirstPage,
      '/reachestimate'
    );
  }

  getReachFrequencyPredictions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ReachFrequencyPrediction,
      fields,
      params,
      fetchFirstPage,
      '/reachfrequencypredictions'
    );
  }

  createReachFrequencyPrediction (fields: Array<string>, params: Object = {}): Promise<ReachFrequencyPrediction> {
    return this.createEdge(
      '/reachfrequencypredictions',
      fields,
      params,
      ReachFrequencyPrediction
    );
  }

  getRoas (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountRoas,
      fields,
      params,
      fetchFirstPage,
      '/roas'
    );
  }

  getSavedAudiences (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      SavedAudience,
      fields,
      params,
      fetchFirstPage,
      '/saved_audiences'
    );
  }

  createSponsoredMessageAd (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/sponsored_message_ads',
      fields,
      params,
      
    );
  }

  deleteSubscribedApps (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/subscribed_apps',
      params
    );
  }

  getSubscribedApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountSubscribedApps,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_apps'
    );
  }

  createSubscribedApp (fields: Array<string>, params: Object = {}): Promise<AdAccountSubscribedApps> {
    return this.createEdge(
      '/subscribed_apps',
      fields,
      params,
      AdAccountSubscribedApps
    );
  }

  getTargetingBrowse (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountTargetingUnified,
      fields,
      params,
      fetchFirstPage,
      '/targetingbrowse'
    );
  }

  getTargetingSearch (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountTargetingUnified,
      fields,
      params,
      fetchFirstPage,
      '/targetingsearch'
    );
  }

  getTargetingSentenceLines (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      TargetingSentenceLine,
      fields,
      params,
      fetchFirstPage,
      '/targetingsentencelines'
    );
  }

  getTargetingSuggestions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountTargetingUnified,
      fields,
      params,
      fetchFirstPage,
      '/targetingsuggestions'
    );
  }

  getTargetingValidation (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountTargetingUnified,
      fields,
      params,
      fetchFirstPage,
      '/targetingvalidation'
    );
  }

  deleteTracking (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/tracking',
      params
    );
  }

  getTracking (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountTrackingData,
      fields,
      params,
      fetchFirstPage,
      '/tracking'
    );
  }

  createTracking (fields: Array<string>, params: Object = {}): Promise<AdAccount> {
    return this.createEdge(
      '/tracking',
      fields,
      params,
      AdAccount
    );
  }

  getUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccountUser,
      fields,
      params,
      fetchFirstPage,
      '/users'
    );
  }

  deleteUsersOfAnyAudience (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/usersofanyaudience',
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdAccount {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): AdAccount {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
