package org.pratheesgsweb.myfirstapp.models;


//import javax.validation.constraints.Size;

//import org.hibernate.validator.constraints.NotBlank;
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.index.Indexed;
//import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
/*@Document(collection="products3")

public class myfirstAppModels {
	@Id
	private String id;
	@NotBlank
	@Size(max=250)
	@Indexed(unique=true)
	private String title;
	private String model;
	private String price_old;
	private String price_new;
	private String type;
	private String sale_percentage;
	private String image;
	public myfirstAppModels() {
		super();
	}
	public myfirstAppModels(String title) {
		this.title = title;
	}	
	
    public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	public String getPriceOld() {
		return price_old;
	}

	public void getPriceOld(String price_old) {
		this.price_old = price_old;
	}
	
	public String getPriceNew() {
		return price_new;
	}

	public void getPriceNew(String price_new) {
		this.price_new = price_new;
	}
	public String getSalePercentage() {
		return sale_percentage;
	}

	public void getSalePercentage(String sale_percentage) {
		this.sale_percentage = sale_percentage;
	}
	public String getImage() {
		return image;
	}

	public void getImage(String image) {
		this.image = image;
	}
	@Override
    public String toString() {
        return String.format(
                "products[id=%s, title='%s', model='%s',type='%s',price_old='%s',price_new='%s',sale_percentage='%s',image='%s']",
                id,title,model,type,price_old,price_new,sale_percentage,image);
    }	

}*/
@Entity
@Table(name="products")
public class MyFirstAppModels implements Serializable { 
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="product_id")
        private int productId;  
	@Column(name="title")
        private String title;
	@Column(name="model")	
		private String model;
	@Column(name="type")	
		private String type;
	@Column(name="price_old")	
		private int priceOld;
	@Column(name="price_new")	
		private int priceNew;
	@Column(name="sale_per")	
		private int salePer;
	@Column(name="image")	
		private String image;
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getPriceOld() {
		return priceOld;
	}
	public void setPriceOld(int priceOld) {
		this.priceOld = priceOld;
	}
	public int getPriceNew() {
		return priceNew;
	}
	public void setPriceNew(int priceNew) {
		this.priceNew = priceNew;
	}
	public int getSalePer() {
		return salePer;
	}
	public void setSalePer(int salePer) {
		this.salePer = salePer;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
    public String toString() {
        return String.format(
                "products[id=%s, title='%s', model='%s',type='%s',priceOld='%s',priceNew='%s',salePer='%s',image='%s']",
                productId,title,model,type,priceOld,priceNew,salePer,image);
    }	
}  
