import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  propiedades:any[] = [
    {
      id: 1,
      tipo: "casa",
      direccion: "Calle 1 #123",
      ciudad: "Ciudad de México",
      estado: "CDMX",
      codigoPostal: "12345",
      precioVenta: 2000000,
      precioRenta: 15000,
      habitaciones: 3,
      banos: 2,
      metrosCuadrados: 150
    },
    {
      id: 2,
      tipo: "departamento",
      direccion: "Calle 2 #456",
      ciudad: "Monterrey",
      estado: "Nuevo León",
      codigoPostal: "67890",
      precioVenta: 1500000,
      precioRenta: 12000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 100
    },
    {
      id: 3,
      tipo: "casa",
      direccion: "Calle 3 #789",
      ciudad: "Guadalajara",
      estado: "Jalisco",
      codigoPostal: "54321",
      precioVenta: 3000000,
      precioRenta: 20000,
      habitaciones: 4,
      banos: 3,
      metrosCuadrados: 200
    },
    {
      id: 4,
      tipo: "departamento",
      direccion: "Calle 4 #1011",
      ciudad: "Puebla",
      estado: "Puebla",
      codigoPostal: "24680",
      precioVenta: 1000000,
      precioRenta: 8000,
      habitaciones: 1,
      banos: 1,
      metrosCuadrados: 70
    },
    {
      id: 5,
      tipo: "casa",
      direccion: "Calle 5 #1213",
      ciudad: "Tijuana",
      estado: "Baja California",
      codigoPostal: "13579",
      precioVenta: 2500000,
      precioRenta: 18000,
      habitaciones: 3,
      banos: 2,
      metrosCuadrados: 170
    },
    {
      id: 6,
      tipo: "departamento",
      direccion: "Calle 6 #1415",
      ciudad: "Querétaro",
      estado: "Querétaro",
      codigoPostal: "86420",
      precioVenta: 2000000,
      precioRenta: 15000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 90
    },
    {
      id: 7,
      tipo: "casa",
      direccion: "Calle 7 #1617",
      ciudad: "Mérida",
      estado: "Yucatán",
      codigoPostal: "97531",
      precioVenta: 3500000,
      precioRenta: 25000,
      habitaciones: 5,
      banos: 4,
      metrosCuadrados: 250
    },
    {
      id: 8,
      tipo: "departamento",
      direccion: "Calle 8 #1819",
      ciudad: "Cancún",
      estado: "Quintana Roo",
      codigoPostal: "77500",
      precioVenta: 1800000,
      precioRenta: 13000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 80
    },
    {
      id: 9,
      tipo: "casa",
      direccion: "Calle 20 de Noviembre #345",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 2200000,
      precioRenta: 18000,
      habitaciones: 3,
      banos: 2,
      metrosCuadrados: 180
    },
    {
      id: 10,
      tipo: "departamento",
      direccion: "Calle Juárez #567",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 1200000,
      precioRenta: 10000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 80
    },
    {
      id: 11,
      tipo: "casa",
      direccion: "Calle Madero #891",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 3200000,
      precioRenta: 22000,
      habitaciones: 4,
      banos: 3,
      metrosCuadrados: 250
    },
    {
      id: 12,
      tipo: "departamento",
      direccion: "Calle Aldama #234",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 1500000,
      precioRenta: 12000,
      habitaciones: 2,
      banos: 2,
      metrosCuadrados: 110
    },
    {
      id: 13,
      tipo: "casa",
      direccion: "Calle Hidalgo #567",
      ciudad: "La Piedad",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 2800000,
      precioRenta: 20000,
      habitaciones: 4,
      banos: 3,
      metrosCuadrados: 200
    },
    {
      id: 14,
      tipo: "casa",
      direccion: "Calle Reforma #456",
      ciudad: "Apatzingán",
      estado: "Michoacán",
      codigoPostal: "60120",
      precioVenta: 1800000,
      precioRenta: 15000,
      habitaciones: 3,
      banos: 2,
      metrosCuadrados: 180
    },
    {
      id: 15,
      tipo: "departamento",
      direccion: "Av. Morelos #123",
      ciudad: "Charapan",
      estado: "Michoacán",
      codigoPostal: "61330",
      precioVenta: 1200000,
      precioRenta: 10000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 100
    },
    {
      id: 16,
      tipo: "casa",
      direccion: "Calle Hidalgo #567",
      ciudad: "Morelia",
      estado: "Michoacán",
      codigoPostal: "59300",
      precioVenta: 2800000,
      precioRenta: 20000,
      habitaciones: 4,
      banos: 3,
      metrosCuadrados: 200
    },
    {
      id: 17,
      tipo: "departamento",
      direccion: "Av. Cuauhtémoc #789",
      ciudad: "Los Reyes",
      estado: "Michoacán",
      codigoPostal: "60350",
      precioVenta: 1600000,
      precioRenta: 13000,
      habitaciones: 2,
      banos: 1,
      metrosCuadrados: 110
    },
    {
      id: 18,
      tipo: "casa",
      direccion: "Calle 5 de Mayo #234",
      ciudad: "Maravatío",
      estado: "Michoacán",
      codigoPostal: "61250",
      precioVenta: 2200000,
      precioRenta: 17000,
      habitaciones: 3,
      banos: 2,
      metrosCuadrados: 150
    },
    {
      id: 19,
      tipo: "departamento",
      direccion: "Av. Miguel Hidalgo #678",
      ciudad: "CDMX",
      codigoPostal: "58000",
      precioVenta: 3200000,
      precioRenta: 25000,
      habitaciones: 3,
      banos: 2,
      metrosCuadrados: 180
    },
    {
      id: 20,
      tipo: "casa",
      direccion: "Calle Juárez #890",
      ciudad: "Pátzcuaro",
      estado: "Michoacán",
      codigoPostal: "61600",
      precioVenta: 3500000,
      precioRenta: 28000,
      habitaciones: 4,
      banos: 3,
      metrosCuadrados: 210
    },
    // {
    //   id: 21,
    //   tipo: "departamento",
    //   direccion: "Av. Benito Juárez #123",
    //   ciudad: "Tacámbaro",
    //   estado: "Michoacán",
    //   codigoPostal: "61300",
    //   precioVenta: 1800000,
    //   precioRenta: 15000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 100
    // },
    // {
    //   id: 22,
    //   tipo: "casa",
    //   direccion: "Calle Allende #456",
    //   ciudad: "Uruapan",
    //   estado: "Michoacán",
    //   codigoPostal: "60080",
    //   precioVenta: 2800000,
    //   precioRenta: 22000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 180
    // },
    // {
    //   id: 23,
    //   tipo: "departamento",
    //   direccion: "Av. Zaragoza #789",
    //   ciudad: "Zamora",
    //   estado: "Michoacán",
    //   codigoPostal: "59600",
    //   precioVenta: 2300000,
    //   precioRenta: 18000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 120
    // },
    // {
    //   id: 24,
    //   tipo: "casa",
    //   direccion: "Calle Hidalgo #123",
    //   ciudad: "Acuitzio",
    //   estado: "Michoacán",
    //   codigoPostal: "61870",
    //   precioVenta: 1800000,
    //   precioRenta: 15000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 150
    // },
    // {
    //   id: 25,
    //   tipo: "departamento",
    //   direccion: "Av. Morelos #456",
    //   ciudad: "Aguililla",
    //   estado: "Michoacán",
    //   codigoPostal: "61310",
    //   precioVenta: 1200000,
    //   precioRenta: 10000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 100
    // },
    // {
    //   id: 26,
    //   tipo: "casa",
    //   direccion: "Calle Juárez #789",
    //   ciudad: "Angamacutiro",
    //   estado: "Michoacán",
    //   codigoPostal: "60480",
    //   precioVenta: 2500000,
    //   precioRenta: 18000,
    //   habitaciones: 4,
    //   banos: 3,
    //   metrosCuadrados: 220
    // },
    // {
    //   id: 27,
    //   tipo: "departamento",
    //   direccion: "Av. Cuauhtémoc #123",
    //   ciudad: "Apatzingán",
    //   estado: "Michoacán",
    //   codigoPostal: "60100",
    //   precioVenta: 1600000,
    //   precioRenta: 13000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 110
    // },
    // {
    //   id: 28,
    //   tipo: "casa",
    //   direccion: "Calle Allende #456",
    //   ciudad: "Aporo",
    //   estado: "Michoacán",
    //   codigoPostal: "61290",
    //   precioVenta: 2000000,
    //   precioRenta: 16000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 180
    // },
    // {
    //   id: 29,
    //   tipo: "departamento",
    //   direccion: "Av. Benito Juárez #789",
    //   ciudad: "Aquila",
    //   estado: "Michoacán",
    //   codigoPostal: "61580",
    //   precioVenta: 1400000,
    //   precioRenta: 12000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 120
    // },
    // {
    //   id: 30,
    //   tipo: "casa",
    //   direccion: "Calle Reforma #123",
    //   ciudad: "Ario",
    //   estado: "Michoacán",
    //   codigoPostal: "60950",
    //   precioVenta: 2200000,
    //   precioRenta: 18000,
    //   habitaciones: 4,
    //   banos: 3,
    //   metrosCuadrados: 200
    // },
    // {
    //   id: 31,
    //   tipo: "departamento",
    //   direccion: "Av. Miguel Hidalgo #456",
    //   ciudad: "Arteaga",
    //   estado: "Michoacán",
    //   codigoPostal: "61550",
    //   precioVenta: 1300000,
    //   precioRenta: 11000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 100
    // },
    // {
    //   id: 32,
    //   tipo: "casa",
    //   direccion: "Calle 5 de Mayo #789",
    //   ciudad: "Briseñas",
    //   estado: "Michoacán",
    //   codigoPostal: "61640",
    //   precioVenta: 1900000,
    //   precioRenta: 16000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 150
    // },
    // {
    //   id: 33,
    //   tipo: "departamento",
    //   direccion: "Av. Cuauhtémoc #123",
    //   ciudad: "Buenavista",
    //   estado: "Michoacán",
    //   codigoPostal: "61430",
    //   precioVenta: 1500000,
    //   precioRenta: 13000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 110
    // },
    // {
    //   id: 34,
    //   tipo: "casa",
    //   direccion: "Calle Cuauhtémoc #567",
    //   ciudad: "Carácuaro",
    //   estado: "Michoacán",
    //   codigoPostal: "61520",
    //   precioVenta: 2100000,
    //   precioRenta: 17000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 160
    // },
    // {
    //   id: 35,
    //   tipo: "departamento",
    //   direccion: "Av. Reforma #567",
    //   ciudad: "Chavinda",
    //   estado: "Michoacán",
    //   codigoPostal: "61350",
    //   precioVenta: 1300000,
    //   precioRenta: 11000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 95
    // },
    // {
    //   id: 36,
    //   tipo: "casa",
    //   direccion: "Calle Hidalgo #234",
    //   ciudad: "Coalcomán",
    //   estado: "Michoacán",
    //   codigoPostal: "61670",
    //   precioVenta: 1800000,
    //   precioRenta: 15000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 145
    // },
    // {
    //   id: 37,
    //   tipo: "departamento",
    //   direccion: "Av. Juárez #789",
    //   ciudad: "Epitacio Huerta",
    //   estado: "Michoacán",
    //   codigoPostal: "61450",
    //   precioVenta: 1200000,
    //   precioRenta: 10000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 85
    // },
    // {
    //   id: 38,
    //   tipo: "casa",
    //   direccion: "Calle Morelos #789",
    //   ciudad: "Hidalgo",
    //   estado: "Michoacán",
    //   codigoPostal: "61580",
    //   precioVenta: 2500000,
    //   precioRenta: 18000,
    //   habitaciones: 4,
    //   banos: 3,
    //   metrosCuadrados: 220
    // },
    // {
    //   id: 39,
    //   tipo: "departamento",
    //   direccion: "Av. Cuauhtémoc #567",
    //   ciudad: "Indaparapeo",
    //   estado: "Michoacán",
    //   codigoPostal: "61370",
    //   precioVenta: 1600000,
    //   precioRenta: 14000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 100
    // },
    // {
    //   id: 40,
    //   tipo: "casa",
    //   direccion: "Calle Reforma #234",
    //   ciudad: "Jiménez",
    //   estado: "Michoacán",
    //   codigoPostal: "61400",
    //   precioVenta: 2200000,
    //   precioRenta: 17000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 180
    // },
    // {
    //   id: 41,
    //   tipo: "departamento",
    //   direccion: "Av. Miguel Hidalgo #123",
    //   ciudad: "Juárez",
    //   estado: "Michoacán",
    //   codigoPostal: "61490",
    //   precioVenta: 1300000,
    //   precioRenta: 11000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 95
    // },
    // {
    //   id: 42,
    //   tipo: "casa",
    //   direccion: "Calle 20 de Noviembre #567",
    //   ciudad: "Lázaro Cárdenas",
    //   estado: "Michoacán",
    //   codigoPostal: "61510",
    //   precioVenta: 2400000,
    //   precioRenta: 16000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 170
    // },
    // {
    //   id: 43,
    //   tipo: "departamento",
    //   direccion: "Av. Benito Juárez #789",
    //   ciudad: "Madero",
    //   estado: "Michoacán",
    //   codigoPostal: "61520",
    //   precioVenta: 1400000,
    //   precioRenta: 12000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 100
    // },
    // {
    //   id: 44,
    //   tipo: "casa",
    //   direccion: "Calle Allende #234",
    //   ciudad: "Maravatío",
    //   estado: "Michoacán",
    //   codigoPostal: "61630",
    //   precioVenta: 2000000,
    //   precioRenta: 15000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 180
    // },
    // {
    //   id: 45,
    //   tipo: "departamento",
    //   direccion: "Av. Cuauhtémoc #123",
    //   ciudad: "Morelia",
    //   estado: "Michoacán",
    //   codigoPostal: "58010",
    //   precioVenta: 3300000,
    //   precioRenta: 26000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 190
    // },
    // {
    //   id: 46,
    //   tipo: "casa",
    //   direccion: "Calle Reforma #567",
    //   ciudad: "Nahuatzen",
    //   estado: "Michoacán",
    //   codigoPostal: "61270",
    //   precioVenta: 2100000,
    //   precioRenta: 16000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 170
    // },
    // {
    //   id: 47,
    //   tipo: "departamento",
    //   direccion: "Av. Miguel Hidalgo #789",
    //   ciudad: "Nocupétaro",
    //   estado: "Michoacán",
    //   codigoPostal: "61280",
    //   precioVenta: 1500000,
    //   precioRenta: 13000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 95
    // },
    // {
    //   id: 48,
    //   tipo: "casa",
    //   direccion: "Calle Juárez #234",
    //   ciudad: "Nuevo Parangaricutiro",
    //   estado: "Michoacán",
    //   codigoPostal: "61380",
    //   precioVenta: 2200000,
    //   precioRenta: 17000,
    //   habitaciones: 3,
    //   banos: 2,
    //   metrosCuadrados: 180
    // },
    // {
    //   id: 49,
    //   tipo: "departamento",
    //   direccion: "Av. Cuauhtémoc #123",
    //   ciudad: "Nuevo Urecho",
    //   estado: "Michoacán",
    //   codigoPostal: "61470",
    //   precioVenta: 1400000,
    //   precioRenta: 12000,
    //   habitaciones: 2,
    //   banos: 1,
    //   metrosCuadrados: 100
    // },
    // {
    //   id: 50,
    //   tipo: "casa",
    //   direccion: "Calle Allende #567",
    //   ciudad: "Numarán",
    //   estado: "Michoacán",
    //   codigoPostal: "61480",
    //   precioVenta: 2300000,
    //   precioRenta: 18000,
    //   habitaciones: 4,
    //   banos: 3,
    //   metrosCuadrados: 200
    // }
    ];
  constructor() { }


  getPropiedades(){
    return this.propiedades;
  }}
