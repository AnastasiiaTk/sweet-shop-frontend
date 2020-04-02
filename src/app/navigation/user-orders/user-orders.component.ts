import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order.service';
import {OrderDTO} from '../../dto/orderDTO';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';
import {ProductService} from '../../service/product.service';
import {OrderItemDTO} from '../../dto/OrderItemDTO';

@Component({
  selector: 'app-my-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  orders: OrderDTO[] = [];

  constructor(private orderService: OrderService, private productService: ProductService) {
  }

  ngOnInit() {
    this.getUserOrders();
  }

  getUserOrders(): void {
    this.orderService.getUserOrders().subscribe((resultOrders: Array<OrderDTO>) => {
      this.orders = this.fillOrdersInfo(resultOrders);
    });
  }

  private fillOrdersInfo(ordersFromResponse: Array<OrderDTO>): Array<OrderDTO> {
    const orderDtoResult: OrderDTO[] = [];
    ordersFromResponse.forEach(function(order) {
      const orderDto: OrderDTO = new OrderDTO();
      orderDto.orderId = order.orderId;
      orderDto.date = order.date;
      const groupedProducts = from(order.productsDTO).pipe(
        groupBy(dto => dto.product.productId),
        mergeMap(group => group.pipe(toArray()))
      );
      const subscribe = groupedProducts.subscribe(val => {
        const item: OrderItemDTO = new OrderItemDTO();
        item.productDTO = val[0];
        item.amount = val.length;
        orderDto.groupedProducts.push(item);
      });
      orderDtoResult.push(orderDto);
    });
    return orderDtoResult;
  }

}
