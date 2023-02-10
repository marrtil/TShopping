import * as React from "react";
import { useParams } from "react-router";
import { productDetail } from "../api";
import { reviewWrite } from "../orderApi";
import { product, initialProducts } from "../product";
import { detail, INITIAL_REVIEW, Review } from "../Types";
import RatingInput from "./RatingInput";

const ReviewWriteForm = (orders: any) => {
  const { productInfo } = useParams();
  const orderId = productInfo!.split("_")[0];
  const productId = productInfo!.split("_")[1];
  const [review, setReview] = React.useState<Review>(INITIAL_REVIEW);
  const [product, setProduct] = React.useState<product>(initialProducts[0]);

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
    let myOrder: any;
    Object.values(orders).map((item: any) => {
      if (item["id"] == orderId) {
        myOrder = item;
        return;
      }
    });
    if (myOrder) {
      Object.values(myOrder["detail"]).map((item: any) => {
        if (item["productId"] == productId) {
          myOrder = item;
          return;
        }
      });
    }
    // reviewWrite({ ...review, ...myOrder, ...{ orderId: orderId } });
    console.log({ ...review, ...myOrder, ...{ orderId: orderId } });
  };
  const handleLoad = async () => {
    const product = await productDetail(Number(productId));
    setProduct(product);
  };
  React.useEffect(() => {
    handleLoad();
  }, []);

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
