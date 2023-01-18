# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL
```
https://maps.googleapis.com/maps/api/directions/json?region=ca&language=en&origin=place_id%3AChIJq6p6ZumM1YkRwlenRs5y5SY&destination=place_id%3AChIJDcIzdI571YkRdHStExr94S4&waypoints=place_id%3AChIJMa1rT1t51YkRvWiqKyKPT8Q%7Cplace_id%3AChIJFQkGDlx51YkRbmtT8T_fJPY%7Cvia%3Aplace_id%3AChIJCyPXRVx51YkRn4ERARYVEDo&avoid=tolls|ferries&units=metric&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJq6p6ZumM1YkRwlenRs5y5SY",
         "types" : [ "establishment", "point_of_interest", "university" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJMa1rT1t51YkRvWiqKyKPT8Q",
         "types" : [ "bank", "establishment", "finance", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJFQkGDlx51YkRbmtT8T_fJPY",
         "types" : [ "atm", "bank", "establishment", "finance", "point_of_interest" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJCyPXRVx51YkRn4ERARYVEDo",
         "types" : [ "establishment", "point_of_interest", "police" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJDcIzdI571YkRdHStExr94S4",
         "types" : [ "airport", "establishment", "point_of_interest" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 44.3647103,
               "lng" : -78.7348882
            },
            "southwest" : {
               "lat" : 44.3410364,
               "lng" : -78.77573769999999
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "2.2 km",
                  "value" : 2219
               },
               "duration" : {
                  "text" : "6 mins",
                  "value" : 333
               },
               "end_address" : "66 Kent St W, Lindsay, ON K9V 2Y2, Canada",
               "end_location" : {
                  "lat" : 44.3552765,
                  "lng" : -78.7371344
               },
               "start_address" : "200 Albert St S, Lindsay, ON K9V 5E6, Canada",
               "start_location" : {
                  "lat" : 44.3410364,
                  "lng" : -78.7416585
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e toward \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ojsmGjfr_Nk@pA"
                     },
                     "start_location" : {
                        "lat" : 44.3410364,
                        "lng" : -78.7416585
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{ksmG|hr_N_@W"
                     },
                     "start_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 919
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 151
                     },
                     "end_location" : {
                        "lat" : 44.3484608,
                        "lng" : -78.74255839999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{lsmGdhr_NBK@MAOE[SsAUyAEQEQM[MWQWsAc@ICWESAODQD{Bx@eA`@mC~@MFeBn@{E`BMDa@NmEzAyCbAu@T"
                     },
                     "start_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 637
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 44.3501105,
                        "lng" : -78.7348882
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDurham St W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{xtmG~kr_NcBkM_@mCKw@Ii@OeACQ[gC_@qC_BoM"
                     },
                     "start_location" : {
                        "lat" : 44.3484608,
                        "lng" : -78.74255839999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 602
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 104
                     },
                     "end_location" : {
                        "lat" : 44.3552765,
                        "lng" : -78.7371344
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWilliam St S\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ecumG`|p_NiF~AiC|@mBn@qFdB_GrBu@V"
                     },
                     "start_location" : {
                        "lat" : 44.3501105,
                        "lng" : -78.7348882
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "0.3 km",
                  "value" : 316
               },
               "duration" : {
                  "text" : "1 min",
                  "value" : 59
               },
               "end_address" : "189 Kent St W, Lindsay, ON K9V 5G6, Canada",
               "end_location" : {
                  "lat" : 44.3542434,
                  "lng" : -78.7404315
               },
               "start_address" : "66 Kent St W, Lindsay, ON K9V 2Y2, Canada",
               "start_location" : {
                  "lat" : 44.3552765,
                  "lng" : -78.7371344
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "31 m",
                        "value" : 31
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 44.3550149,
                        "lng" : -78.73701109999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eWilliam St N\u003c/b\u003e toward \u003cb\u003eKent St W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ocvmG`jq_Nt@W"
                     },
                     "start_location" : {
                        "lat" : 44.3552765,
                        "lng" : -78.7371344
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 285
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 44.3542434,
                        "lng" : -78.7404315
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 1st cross street onto \u003cb\u003eKent St W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yavmGhiq_NbBnMt@zE"
                     },
                     "start_location" : {
                        "lat" : 44.3550149,
                        "lng" : -78.73701109999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "4.3 km",
                  "value" : 4297
               },
               "duration" : {
                  "text" : "7 mins",
                  "value" : 412
               },
               "end_address" : "Kawartha Lakes Municipal Airport (CNF4), 3187 ON-35, Lindsay, ON K9V 4R1, Canada",
               "end_location" : {
                  "lat" : 44.3645538,
                  "lng" : -78.77571189999999
               },
               "start_address" : "189 Kent St W, Lindsay, ON K9V 5G6, Canada",
               "start_location" : {
                  "lat" : 44.3542434,
                  "lng" : -78.7404315
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "35 m",
                        "value" : 35
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 44.3541428,
                        "lng" : -78.7408483
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003eKent St W\u003c/b\u003e toward \u003cb\u003eVictoria Ave N\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_}umGt~q_NRrA"
                     },
                     "start_location" : {
                        "lat" : 44.3542434,
                        "lng" : -78.7404315
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 660
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 44.3597945,
                        "lng" : -78.7433937
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at the 1st cross street onto \u003cb\u003eVictoria Ave N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k|umGhar_NyBv@}Bt@oBn@gC|@oBr@cCz@iBn@KByBt@uCdA"
                     },
                     "start_location" : {
                        "lat" : 44.3541428,
                        "lng" : -78.7408483
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2266
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 217
                     },
                     "end_location" : {
                        "lat" : 44.35350649999999,
                        "lng" : -78.77050090000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eColborne St W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "u_wmGdqr_NBXdAdHl@~Dz@`GdBjLv@dF@PDXLp@l@fEl@~DPnABNPfBRrAVzAV~Aj@~DHn@f@lDT~Ap@~ET~AJn@t@nFHn@DXTvApBxNZtBp@pErBxNJn@b@bDLt@`@tC"
                     },
                     "start_location" : {
                        "lat" : 44.3597945,
                        "lng" : -78.7433937
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1308
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 44.3647103,
                        "lng" : -78.77551509999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eON-35 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mxumGrzw_N_AZaBh@E@cAZ{E|Am@TsCbAWHa@NcA\\iC|@a@Na@La@N_AZaMjEIByBt@_Bh@cA^oCbAmGzB"
                     },
                     "start_location" : {
                        "lat" : 44.35350649999999,
                        "lng" : -78.77050090000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "28 m",
                        "value" : 28
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 44.3645538,
                        "lng" : -78.77571189999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "m~wmG~yx_NNf@@B@?JE"
                     },
                     "start_location" : {
                        "lat" : 44.3647103,
                        "lng" : -78.77551509999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : [
                  {
                     "location" : {
                        "lat" : 44.3551156,
                        "lng" : -78.7412851
                     },
                     "step_index" : 1,
                     "step_interpolation" : 0.1720777906454205
                  }
               ]
            }
         ],
         "overview_polyline" : {
            "points" : "ojsmGjfr_Nk@pA_@WDYGk@i@mDKc@[s@QWsAc@a@Ic@BmC~@gIxCyMrEoExAcCyQi@yD{@yG_BoMiF~AwFlBqFdB_GrBu@Vt@WbBnMt@zERrAyBv@mFdBeN|EeCx@uCdABXrBdN`DlTlAbIpBfNPfBRrAn@zDrB|N`Hzf@lEpZp@xE`@tC_AZgBj@_HxB{FrB_YtJyE~AsEbBmGzBNf@BBJE"
         },
         "summary" : "Albert St S, Durham St W and William St S",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
