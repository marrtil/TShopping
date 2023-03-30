import * as React from "react";
import { useParams } from "react-router";
import Order from "../../tsback/models/order";
import { productDetail } from "../api";
import { reviewWrite } from "../orderApi";
import { product } from "../product";
import { detail, INITIAL_REVIEW, Review } from "../Types";
import RatingInput from "./RatingInput";

const ReviewWriteForm = ({ order, productId }: { order: Order | any; productId: number }) => {
  const { productInfo } = useParams();
  const [review, setReview] = React.useState<Review>(INITIAL_REVIEW);
  const [product, setProduct] = React.useState<product>({
    id: productId,
    name: "",
    kind: "",
    size: "",
    color: "",
    image: "",
    price: 0,
    discount: 0,
    count: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const ratingChange = (name: string, value: number) => {
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    //리뷰 작성
    if (review.rating == 0) {
      alert("별점을 입력해주세요");
      return;
    }
    let myOrder: detail;

    if (order["id"] !== "") {
      myOrder = order["detail"].filter((x: detail) => x.productId === productId);
      reviewWrite({ ...review, ...myOrder, ...{ orderId: order.id } });
    }
  };
  const handleLoad = async () => {
    const pr = await productDetail(productId);
    setProduct(pr);
  };
  React.useEffect(() => {
    console.log(product);
    handleLoad();
  }, [productId]);

  return (
    <>
      <tr>
        <td colSpan={5}>
          <hr></hr>
        </td>
      </tr>
      <tr id="reviewTr">
        {product ? <td>{product.name}</td> : <></>}
        <td colSpan={3}>
          <textarea name="content" id="reviewTextArea" onChange={handleChange} />
        </td>
        <td>
          {" "}
          <RatingInput name="rating" value={review.rating} onChange={ratingChange} />
          <button onClick={handleSubmit}>작성</button>
        </td>
      </tr>
    </>
  );
};

export default ReviewWriteForm;
