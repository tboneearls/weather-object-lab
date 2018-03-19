// DATA

const evanstonWeather = {
    cod: "200",
    message: 0.0099,
    cnt: 40,
    list: [{
            dt: 1521223200,
            main: {
                temp: 273.61,
                temp_min: 273.363,
                temp_max: 273.61,
                pressure: 1014.07,
                sea_level: 1037.26,
                grnd_level: 1014.07,
                humidity: 100,
                temp_kf: 0.25
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 44
            },
            wind: {
                speed: 4.1,
                deg: 93.0003
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-16 18:00:00"
        },
        {
            dt: 1521234000,
            main: {
                temp: 273.28,
                temp_min: 273.091,
                temp_max: 273.28,
                pressure: 1012.07,
                sea_level: 1035.03,
                grnd_level: 1012.07,
                humidity: 100,
                temp_kf: 0.19
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 64
            },
            wind: {
                speed: 3.31,
                deg: 93.503
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-16 21:00:00"
        },
        {
            dt: 1521244800,
            main: {
                temp: 272.45,
                temp_min: 272.324,
                temp_max: 272.45,
                pressure: 1010.97,
                sea_level: 1034.19,
                grnd_level: 1010.97,
                humidity: 100,
                temp_kf: 0.12
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 3.91,
                deg: 64.0015
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 00:00:00"
        },
        {
            dt: 1521255600,
            main: {
                temp: 272.7,
                temp_min: 272.638,
                temp_max: 272.7,
                pressure: 1010.94,
                sea_level: 1034.36,
                grnd_level: 1010.94,
                humidity: 100,
                temp_kf: 0.06
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 3.87,
                deg: 74.0027
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 03:00:00"
        },
        {
            dt: 1521266400,
            main: {
                temp: 273.212,
                temp_min: 273.212,
                temp_max: 273.212,
                pressure: 1008.91,
                sea_level: 1032.47,
                grnd_level: 1008.91,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 92
            },
            wind: {
                speed: 4.32,
                deg: 66.5011
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 06:00:00"
        },
        {
            dt: 1521277200,
            main: {
                temp: 273.743,
                temp_min: 273.743,
                temp_max: 273.743,
                pressure: 1007.13,
                sea_level: 1030.56,
                grnd_level: 1007.13,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 80
            },
            wind: {
                speed: 4.36,
                deg: 78.0024
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 09:00:00"
        },
        {
            dt: 1521288000,
            main: {
                temp: 273.743,
                temp_min: 273.743,
                temp_max: 273.743,
                pressure: 1006.96,
                sea_level: 1030.51,
                grnd_level: 1006.96,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 76
            },
            wind: {
                speed: 4.32,
                deg: 81.0023
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 12:00:00"
        },
        {
            dt: 1521298800,
            main: {
                temp: 274.629,
                temp_min: 274.629,
                temp_max: 274.629,
                pressure: 1007.81,
                sea_level: 1031,
                grnd_level: 1007.81,
                humidity: 92,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
            }],
            clouds: {
                all: 92
            },
            wind: {
                speed: 3.38,
                deg: 66.5022
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 15:00:00"
        },
        {
            dt: 1521309600,
            main: {
                temp: 275.358,
                temp_min: 275.358,
                temp_max: 275.358,
                pressure: 1008.39,
                sea_level: 1031.26,
                grnd_level: 1008.39,
                humidity: 88,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 80
            },
            wind: {
                speed: 3.6,
                deg: 49.5005
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 18:00:00"
        },
        {
            dt: 1521320400,
            main: {
                temp: 275.612,
                temp_min: 275.612,
                temp_max: 275.612,
                pressure: 1007.67,
                sea_level: 1030.47,
                grnd_level: 1007.67,
                humidity: 86,
                temp_kf: 0
            },
            weather: [{
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }],
            clouds: {
                all: 12
            },
            wind: {
                speed: 3.01,
                deg: 27.0012
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 21:00:00"
        },
        {
            dt: 1521331200,
            main: {
                temp: 274.579,
                temp_min: 274.579,
                temp_max: 274.579,
                pressure: 1008.51,
                sea_level: 1031.55,
                grnd_level: 1008.51,
                humidity: 90,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.97,
                deg: 2.00034
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 00:00:00"
        },
        {
            dt: 1521342000,
            main: {
                temp: 272.527,
                temp_min: 272.527,
                temp_max: 272.527,
                pressure: 1009.45,
                sea_level: 1032.99,
                grnd_level: 1009.45,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 0.91,
                deg: 359
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 03:00:00"
        },
        {
            dt: 1521352800,
            main: {
                temp: 271.773,
                temp_min: 271.773,
                temp_max: 271.773,
                pressure: 1009.43,
                sea_level: 1033.22,
                grnd_level: 1009.43,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 0.87,
                deg: 231.501
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 06:00:00"
        },
        {
            dt: 1521363600,
            main: {
                temp: 271.301,
                temp_min: 271.301,
                temp_max: 271.301,
                pressure: 1009.63,
                sea_level: 1033.47,
                grnd_level: 1009.63,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.66,
                deg: 233.002
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 09:00:00"
        },
        {
            dt: 1521374400,
            main: {
                temp: 271.276,
                temp_min: 271.276,
                temp_max: 271.276,
                pressure: 1010.25,
                sea_level: 1033.96,
                grnd_level: 1010.25,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.99,
                deg: 233.001
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 12:00:00"
        },
        {
            dt: 1521385200,
            main: {
                temp: 275.51,
                temp_min: 275.51,
                temp_max: 275.51,
                pressure: 1010.23,
                sea_level: 1033.61,
                grnd_level: 1010.23,
                humidity: 87,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.81,
                deg: 245.506
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 15:00:00"
        },
        {
            dt: 1521396000,
            main: {
                temp: 277.975,
                temp_min: 277.975,
                temp_max: 277.975,
                pressure: 1009.22,
                sea_level: 1032.15,
                grnd_level: 1009.22,
                humidity: 75,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.06,
                deg: 130.003
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 18:00:00"
        },
        {
            dt: 1521406800,
            main: {
                temp: 278.068,
                temp_min: 278.068,
                temp_max: 278.068,
                pressure: 1006.65,
                sea_level: 1029.29,
                grnd_level: 1006.65,
                humidity: 74,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 2.96,
                deg: 111
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 21:00:00"
        },
        {
            dt: 1521417600,
            main: {
                temp: 276.442,
                temp_min: 276.442,
                temp_max: 276.442,
                pressure: 1005.57,
                sea_level: 1028.56,
                grnd_level: 1005.57,
                humidity: 83,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 3.61,
                deg: 109.5
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 00:00:00"
        },
        {
            dt: 1521428400,
            main: {
                temp: 274.862,
                temp_min: 274.862,
                temp_max: 274.862,
                pressure: 1005.44,
                sea_level: 1028.68,
                grnd_level: 1005.44,
                humidity: 93,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
            }],
            clouds: {
                all: 8
            },
            wind: {
                speed: 2.82,
                deg: 104
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 03:00:00"
        },
        {
            dt: 1521439200,
            main: {
                temp: 274.273,
                temp_min: 274.273,
                temp_max: 274.273,
                pressure: 1004.25,
                sea_level: 1027.55,
                grnd_level: 1004.25,
                humidity: 94,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 64
            },
            wind: {
                speed: 2.26,
                deg: 102.009
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 06:00:00"
        },
        {
            dt: 1521450000,
            main: {
                temp: 274.609,
                temp_min: 274.609,
                temp_max: 274.609,
                pressure: 1003.74,
                sea_level: 1027.08,
                grnd_level: 1003.74,
                humidity: 97,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 76
            },
            wind: {
                speed: 2.17,
                deg: 83.0033
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 09:00:00"
        },
        {
            dt: 1521460800,
            main: {
                temp: 274.975,
                temp_min: 274.975,
                temp_max: 274.975,
                pressure: 1003.61,
                sea_level: 1026.97,
                grnd_level: 1003.61,
                humidity: 94,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.37,
                deg: 58.0012
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 12:00:00"
        },
        {
            dt: 1521471600,
            main: {
                temp: 275.277,
                temp_min: 275.277,
                temp_max: 275.277,
                pressure: 1003.78,
                sea_level: 1026.89,
                grnd_level: 1003.78,
                humidity: 95,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 6.1,
                deg: 62.5003
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 15:00:00"
        },
        {
            dt: 1521482400,
            main: {
                temp: 275.726,
                temp_min: 275.726,
                temp_max: 275.726,
                pressure: 1004.52,
                sea_level: 1027.3,
                grnd_level: 1004.52,
                humidity: 87,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 6.66,
                deg: 54.5007
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 18:00:00"
        },
        {
            dt: 1521493200,
            main: {
                temp: 276.466,
                temp_min: 276.466,
                temp_max: 276.466,
                pressure: 1003.48,
                sea_level: 1026.26,
                grnd_level: 1003.48,
                humidity: 85,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 32
            },
            wind: {
                speed: 7.81,
                deg: 41.5045
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 21:00:00"
        },
        {
            dt: 1521504000,
            main: {
                temp: 275.721,
                temp_min: 275.721,
                temp_max: 275.721,
                pressure: 1003.97,
                sea_level: 1027.02,
                grnd_level: 1003.97,
                humidity: 87,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
            }],
            clouds: {
                all: 32
            },
            wind: {
                speed: 8.96,
                deg: 39.0012
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 00:00:00"
        },
        {
            dt: 1521514800,
            main: {
                temp: 274.464,
                temp_min: 274.464,
                temp_max: 274.464,
                pressure: 1004.75,
                sea_level: 1028.06,
                grnd_level: 1004.75,
                humidity: 96,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
            }],
            clouds: {
                all: 32
            },
            wind: {
                speed: 9.42,
                deg: 51.0078
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 03:00:00"
        },
        {
            dt: 1521525600,
            main: {
                temp: 272.292,
                temp_min: 272.292,
                temp_max: 272.292,
                pressure: 1006.36,
                sea_level: 1029.72,
                grnd_level: 1006.36,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
            }],
            clouds: {
                all: 8
            },
            wind: {
                speed: 9.75,
                deg: 58.0077
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 06:00:00"
        },
        {
            dt: 1521536400,
            main: {
                temp: 270.924,
                temp_min: 270.924,
                temp_max: 270.924,
                pressure: 1006.41,
                sea_level: 1030.1,
                grnd_level: 1006.41,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
            }],
            clouds: {
                all: 8
            },
            wind: {
                speed: 9.71,
                deg: 51.0003
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 09:00:00"
        },
        {
            dt: 1521547200,
            main: {
                temp: 270.337,
                temp_min: 270.337,
                temp_max: 270.337,
                pressure: 1007.45,
                sea_level: 1031.19,
                grnd_level: 1007.45,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }],
            clouds: {
                all: 12
            },
            wind: {
                speed: 9.25,
                deg: 52.5016
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 12:00:00"
        },
        {
            dt: 1521558000,
            main: {
                temp: 270.951,
                temp_min: 270.951,
                temp_max: 270.951,
                pressure: 1008.94,
                sea_level: 1032.57,
                grnd_level: 1008.94,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }],
            clouds: {
                all: 24
            },
            wind: {
                speed: 8.61,
                deg: 51.5031
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 15:00:00"
        },
        {
            dt: 1521568800,
            main: {
                temp: 271.614,
                temp_min: 271.614,
                temp_max: 271.614,
                pressure: 1009.29,
                sea_level: 1032.63,
                grnd_level: 1009.29,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 48
            },
            wind: {
                speed: 7.91,
                deg: 40.5026
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 18:00:00"
        },
        {
            dt: 1521579600,
            main: {
                temp: 272.158,
                temp_min: 272.158,
                temp_max: 272.158,
                pressure: 1008.86,
                sea_level: 1032.15,
                grnd_level: 1008.86,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 48
            },
            wind: {
                speed: 7.47,
                deg: 28.0009
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 21:00:00"
        },
        {
            dt: 1521590400,
            main: {
                temp: 272.201,
                temp_min: 272.201,
                temp_max: 272.201,
                pressure: 1009.91,
                sea_level: 1033.42,
                grnd_level: 1009.91,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 6.91,
                deg: 16.0005
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 00:00:00"
        },
        {
            dt: 1521601200,
            main: {
                temp: 272.791,
                temp_min: 272.791,
                temp_max: 272.791,
                pressure: 1011.07,
                sea_level: 1034.92,
                grnd_level: 1011.07,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 5.81,
                deg: 18.5001
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 03:00:00"
        },
        {
            dt: 1521612000,
            main: {
                temp: 273.016,
                temp_min: 273.016,
                temp_max: 273.016,
                pressure: 1011.23,
                sea_level: 1035.2,
                grnd_level: 1011.23,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.19,
                deg: 63.5004
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 06:00:00"
        },
        {
            dt: 1521622800,
            main: {
                temp: 271.986,
                temp_min: 271.986,
                temp_max: 271.986,
                pressure: 1011.85,
                sea_level: 1035.8,
                grnd_level: 1011.85,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.56,
                deg: 76.5001
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 09:00:00"
        },
        {
            dt: 1521633600,
            main: {
                temp: 271.226,
                temp_min: 271.226,
                temp_max: 271.226,
                pressure: 1013.31,
                sea_level: 1037.46,
                grnd_level: 1013.31,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.32,
                deg: 64.0016
            },
            snow: {
                h: 0.01
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-21 12:00:00"
        },
        {
            dt: 1521644400,
            main: {
                temp: 271.676,
                temp_min: 271.676,
                temp_max: 271.676,
                pressure: 1015.19,
                sea_level: 1039,
                grnd_level: 1015.19,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.21,
                deg: 54.0007
            },
            snow: {},
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-21 15:00:00"
        }
    ],
    city: {
        id: 420011163,
        name: "Evanston",
        coord: {
            lat: 42.0447,
            lon: -87.6931
        },
        country: "US"
    }
};

// 1

console.log(evanstonWeather.city.name);
console.log("The coordinates of " + evanstonWeather.city.name + " are " + evanstonWeather.city.coord.lat + " latitude and " + evanstonWeather.city.coord.lon + " longitude.");

const getCity = (obj) => {
    // make a variable to store the city data from the object parameter
    const cityData = obj.city;
    // return the name of the city from the cityData variable
    return cityData.name;
};

console.log(getCity(evanstonWeather));

// 2

// https://www.epochconverter.com/
// ^^ to convert unix timestamp to a normal human time.
// must use "GMT" not local time for it to work
// do not use unix time in milliseconds

// unix timestamp of 03/20 6:00 pm = 1521568800

// console.log(evanstonWeather.list.length);
for (let i = 0; i < evanstonWeather.list.length; i++) {
    if (evanstonWeather.list[i].dt === 1521568800) {
        console.log ("The weather in Evanston on March 20th at 6:00 PM is expected to be " + evanstonWeather.list[i].weather[0].description + ".");
        // the weather data is in an array with one element.
    }
};

// 3 

// unix timestamp at 03/20 9:00 am = 1521536400

// to convert Kelvin to Fahrenheit: 1.8 x (K - 273) + 32.
// create function to convert Kelvin to Fahrenheit:
const kelvinToFahrenheit = (tempInKelvin) => {
    return (1.8 * (tempInKelvin - 273) + 32) // output in degrees Fahrenheit
};

for (let i = 0; i < evanstonWeather.list.length; i++) {
    if (evanstonWeather.list[i].dt === 1521536400) {
        console.log(kelvinToFahrenheit(evanstonWeather.list[i].main.temp));
    }
}

// 4

// create meters/second to miles/hour conversion function 

// 3600 seconds in an hour
// 1609.344 meters in a mile
// 3600 / 1609.344 = 2.236936292054402 (7 significant figures)

const metersSecToMPH = (metersPerSec) => {
    return (metersPerSec * 2.236936292054402);
};

// create wind degrees to cardinal direction conversion function

// direction changes every 45 degrees with 8 directions starting at 22.5 degrees going clockwise

const degToCard = (degrees) => {
    // set condition if degrees is over 360
    if (degrees >= 360) {
        degrees -= 360;
    } else if (22.5 < degrees < 67.5) {
        return "NE";
    } else if (67.5 < degrees < 112.5) {
        return "E";
    } else if (112.5 < degrees < 157.5) {
        return "SE";
    } else if (157.5 < degrees < 202.5) {
        return "S";
    } else if (202.5 < degrees < 247.5) {
        return "SW";
    } else if (247.5 < degrees < 292.5) {
        return "W";
    } else if (292.5 < degrees < 337.5) {
        return "NW";
    } else {
        // decided to do N last so I don't have to set more conditions
        // since it switches at 0 degrees
        return "N";
    }
};

// timestamp of St. Patty's at 3pm = 1521298800

// want to find wind speed (in MPH) and direction

for (let i = 0; i < evanstonWeather.list.length; i++) {
    if (evanstonWeather.list[i].dt === 1521298800) {
        console.log("The wind will be blowing " + degToCard(evanstonWeather.list[i].wind.deg) + " at " + metersSecToMPH(evanstonWeather.list[i].wind.speed) + " MPH.");
    }
};

// 5

// print the humidity each day at noon
// if humidity is over 75% also print gross

// every 24 hours the unix timestamp increases by 86400
// first unix time stamp was at 00:00
// that means the first time it was noon is half that value, 43200


// find and return dates for all unix timestamps at noon
// store them in an array

const unixNoonHumidity = {};

for (let i = 0; i < evanstonWeather.list.length; i++) {
    // if the unix time stamp is at noon
    if (((evanstonWeather.list[i].dt - 43200) % 86400) === 0) {
        // assign variable to humidity above 75
        let grossHumidity = evanstonWeather.list[i].main.humidity;
        // capture humidities above 75 for dates at noon to implement the word gross
        if (grossHumidity >= 75) {
            unixNoonHumidity[evanstonWeather.list[i].dt_txt] = evanstonWeather.list[i].main.humidity + "% gross";
            // console.log(evanstonWeather.list[i].main.humidity);
        }
    }
}

console.log(unixNoonHumidity);
// now I have an object with all dates at noon from the original object
// with their corresponding humidities


// 6

// need to write function to convert unix time stamp to human-friendly time
// times in table are already offset to our timezone.
// got to convert to milliseconds

const convertDate = (unix) => {
    // convert unix to milliseconds
    const weatherDate = new Date(unix * 1000);
    // convert to string and remove extra data at the end so it's more human-friendly
    const condensedDate = weatherDate.toString().substr(0,15);
    return condensedDate;
};

const myWeatherUnclean = [];


for (let i = 0; i < evanstonWeather.list.length; i++) {
    // store dates converted from unix value in a variable
    let convertedDates = convertDate(evanstonWeather.list[i].dt);
    if (i + 1 < evanstonWeather.list.length) {
        let convertedDatesPlusOne = convertDate(evanstonWeather.list[i + 1].dt);
        // console.log(convertedDates, convertedDatesPlusOne, evanstonWeather.list[i + 1]);
        // push converted dates to the array as separate objects
        if (convertedDates != convertedDatesPlusOne) {
            myWeatherUnclean[i] = {date: convertedDates};
        }
    } else if (i + 1 === evanstonWeather.list.length) {
        // doing this so I can capture the unique date at the end of the array
        // in this case, Wednesday
        myWeatherUnclean[evanstonWeather.list.length - 1] = {date: convertedDates};
    }
};

console.log(myWeatherUnclean);
// I have an array of objects with all the dates in normal human terms
// only one object for each day
// need to filter out empty parts of array

const cleanArray = (arr) => {
    const newArray = new Array();
    for (let i = 0; i < arr.length; i++) {
        // will evaluate to true, so will only return
        // values that aren't falsy (i.e., 0, null, NaN, undefined, etc.)
        if (arr[i]) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(myWeatherUnclean);
const myWeather = cleanArray(myWeatherUnclean);

console.log(myWeather);
// high temps for each day
// 4 Friday times, 4 Wed times, 8 everything in between
// first find temps for each day
// convert to F using function built earlier
// identify each day
// then use Math.max to determine the highest temp for that day
// add to object

const dailyTemps = []; 

for (let i = 0; i < evanstonWeather.list.length; i++) {
    // convert the Evanston temperatures to degrees Fahrenheit
    let evanstonTemp = (kelvinToFahrenheit(evanstonWeather.list[i].main.temp));
    // need to convert the days again to capture + compare
    let convertedDates = convertDate(evanstonWeather.list[i].dt);
    // put each daily temp as date: temp in here, then search for max temp
    // console.log(convertedDates, evanstonTemp);
    // need to use bracket notation so it reads the variable, not the word
    // being assigned as a key
    dailyTemps[i] = {[convertedDates]: evanstonTemp}
    // console.log(myWeather[j]["date"]);
    // console.log(evanstonTemp);
};

// maybe I can split each day's temp into its own array?


// if (i + 1 < evanstonWeather.list.length) {
//     let convertedDates = convertDate(evanstonWeather.list[i].dt);
//     if (convertedDates === ) { 
//     }
// }

console.log(dailyTemps);
// console.log(myWeather.length, dailyTemps.length);
// console.log(dailyTemps[0], Object.keys(dailyTemps[0]), Object.values(dailyTemps[0]));
// console.log(myWeather[0], Object.keys(myWeather[0]), Object.values(myWeather[0]));
for (let i = 0; i < dailyTemps.length; i++) {
    for (let j = 0; j < myWeather.length; j++) {
        // console.log(myWeather[j]["date"]);
        // for (let prop in dailyTemps[i]) {
            if (Object.values(myWeather[j]) === Object.keys(dailyTemps[i])) {
                console.log("hello");
            }
        // }
    }
}

// for (let i = 0; i < evanstonWeather.list.length; i++) {
//     let convertedDates = convertDate(evanstonWeather.list[i].dt);
//     console.log(dailyTemps[i][convertedDates], dailyTemps[i + 1][convertedDates]);
//     // need to redefine convertedDates so I can call it in this loop.
//     if (i + 1 < evanstonWeather.list.length) {
//         // i + 1 can't be greater than the length of the array because the last
//         // value of i would read undefined  
//         if (dailyTemps[i][convertedDates] === dailyTemps[i + 1][convertedDates]) {
//             // if the days are the same
//             // store max temp for each day in an array
//             const dailyMaxTemp = [];
//             if (Object.values(dailyTemps[i]) >= Object.values(dailyTemps[i + 1])) {
//                 // find the highest temp for each day
//                 // store in array
//                 dailyMaxTemp.push(dailyTemps[i]);
//                 for (let j = 0; j < myWeather.length; j++) {
//                     // assign the highest temp to the myWeather object
//                     // const myWeatherTemps = Object.values(dailyMaxTemps[j])
//                     // myWeather[j]["temp"] = Object.values(dailyMaxTemp[j]);
//                 }
//             }
//             console.log(dailyMaxTemp);
//         }
//     }
// }

console.log(myWeather);
// // now I have all the dates and temps in an array of objects

// condensedArr = [];

// console.log(myWeather[0].hasOwnProperty("Sun Mar 18 2018"));
