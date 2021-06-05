/* eslint-disable prettier/prettier */
import {put, call, takeLatest} from 'redux-saga/effects';
import paymentAction, {PaymentTypes} from './actions';
import NavigationUtils from '../../navigation/Utils';
import RNMomosdk from 'react-native-momosdk';
import { Platform } from  'react-native';
import { configPayment } from '../../api/apiPayment';
import paymentActions from './actions';

export function* confirmPaymentUserSaga({jsonData}){
  try {

    let dataConfirm = {};
    dataConfirm.phone = "hello";
    dataConfirm.price = 3765544;
    dataConfirm.token = "dnfdhbfkjdehfr";
    dataConfirm.paymentId = "jergfrgir";

    fetch('https://polar-taiga-31053.herokuapp.com/api/payment',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataConfirm
      }).then(response => {
        console.log('data response payment ' + response.data);
      }).catch(err => {
        console.log(err)
      })



    // let dataPayment = yield RNMomosdk.requestPayment(jsonData);

    // console.log("data_request_payment****** " + JSON.stringify(dataPayment));
    let pack = '';
    if(jsonData.amount == 200000){
      pack = 'Chuyên Sâu';
    }else{
      pack = 'Đặc Biệt';
    }

    // if(dataPayment.status == 0){

    //   let dataConfirm = {};
    //   dataConfirm.phone = dataPayment.phonenumber;
    //   dataConfirm.price = jsonData.amount;
    //   dataConfirm.token = dataPayment.data;
    //   dataConfirm.paymentId = jsonData.orderId;

    //   console.log("data payment to server ++++++++++++++++++++" + dataConfirm);


    //   yield confirmPaymentServerSaga(dataConfirm);
    // }
    yield put(paymentActions.paymentSuccess(pack));
    alert("thanh toán thành công");
  } catch (error) {
    console.error(error);
  }
}


export function* confirmPaymentServerSaga(dataConfirm){
    try {
      console.log("confirm data payment with server momo");
      console.log(dataConfirm.price);
  
  fetch('https://polar-taiga-31053.herokuapp.com/api/payment',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataConfirm
      }).then(response => {
        console.log('data response payment ' + JSON.stringify(response.data));
      }).catch(err => {
        console.log(err)
      })

  // fetch('https://polar-taiga-31053.herokuapp.com/api/payment', {
  //       method: 'POST',
  //       headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //      },
  //      body:{
  //      phone : dataConfirm.phone,
  //      price : dataConfirm.price,
  //      token : dataConfirm.token,
  //      paymentId: dataConfirm.paymentId
  //      }
  //   }).then(function (responses) {
  //       console.log('data response payment ' + JSON.stringify(responses));
  //     // } else {
  //     //   dispatch(OrderAction.userOrder(orderData, onSuccess));
  //     //   console.log('responses', responses);
  //     // }
  //   });
      // const response = yield call(configPayment(JSON.stringify(dataConfirm)));
      // console.log("data response payment:  " + response);
    } catch (error) {
      console.log(error);
    }
}
const paymentSagas = () =>[
  takeLatest(PaymentTypes.CONFIRM_PAYMENT_USER, confirmPaymentUserSaga),
  takeLatest(PaymentTypes.CONFIRM_PAYMENT_SERVER, confirmPaymentServerSaga)
];

export default paymentSagas();

