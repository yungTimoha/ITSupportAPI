import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from "axios";

@Injectable()
export class HttpService {
  createInstance(config: AxiosRequestConfig) {
    return axios.create({
      ...config
    })
  }
}
