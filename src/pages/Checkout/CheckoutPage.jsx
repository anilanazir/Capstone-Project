import { useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-4 gap-10">
      <div className="lg:col-span-2 space-y-8">
        <h2 className="text-xl font-semibold">Billing Details</h2>

        <Input className="p-5!" placeholder="Email Address" />

        <div className="grid grid-cols-2 gap-4">
          <Input className="p-5!" placeholder="First name *" />
          <Input className="p-5!" placeholder="Last name *" />
        </div>

        <Input className="p-5!" placeholder="Country / Region" />
        <Input className="p-5!" placeholder="House number and street name *" />
        <Input className="p-5!" placeholder="Apartment, suite, unit, etc. (optional)" />

        <div className="grid grid-cols-3 gap-4">
          <Input className="p-5!" placeholder="Town / City *" />
          <Input className="p-5!" placeholder="State" />
          <Input className="p-5!" placeholder="Postcode / ZIP *" />
        </div>

        <Input className="p-5!" placeholder="Phone *" />

        <Textarea
          placeholder="Notes about your order, e.g. special notes for delivery."
          className="min-h-[120px] p-5!"
        />

        <div>
          <h3 className="font-semibold mb-2">Payment</h3>
          <p className="text-sm text-muted-foreground">
            Sorry, it seems that there are no available payment methods for your
            state.
          </p>
        </div>

        <Button className="w-full h-12 text-lg bg-[#5c9735] hover:bg-green-700">
          🔒 Place Order ${total.toFixed(2)}
        </Button>
      </div>

      <div className="bg-[#f3f5f0] p-6 rounded-lg space-y-6 lg:col-span-2">
        <h3 className="font-semibold text-lg">Your Order</h3>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded border object-contain "
                />

                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.qty}
                  </p>
                </div>
              </div>

              <p className="font-semibold">
                ${(item.price * item.qty).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
