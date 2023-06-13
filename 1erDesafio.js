class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Comprobar si el código ya está en uso
      if (this.products.some((product) => product.code === code)) {
        throw new Error("El código del producto ya está en uso");
      }
  
      // Generar un nuevo ID único
      const productId = uuidv4();
  
      // Crear el objeto del producto
      const product = {
        id: productId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      // Agregar el producto a la lista
      this.products.push(product);
    }
  
    getProductById(productId) {
      // Buscar el producto por ID
      const product = this.products.find((product) => product.id === productId);
  
      // Si no se encuentra el producto, lanzar un error
      if (!product) {
        throw new Error("No se encontró el producto con el ID especificado");
      }
  
      return product;
    }
  }
  
  // Crear una instancia de ProductManager
  const manager = new ProductManager();
  
  // Llamar al método getProducts (debe devolver un arreglo vacío)
  console.log(manager.getProducts()); // []
  
  // Llamar al método addProduct con los campos especificados
  manager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
  );
  
  // Llamar al método getProducts nuevamente (el producto debe aparecer)
  console.log(manager.getProducts());
  // [
  //   {
  //     id: '7b0714de-98f5-4d88-a119-3e6d45a2b0e1',
  //     title: 'producto prueba',
  //     description: 'Este es un producto prueba',
  //     price: 200,
  //     thumbnail: 'Sin imagen',
  //     code: 'abc123',
  //     stock: 25
  //   }
  // ]
  
  // Intentar agregar un producto con el mismo código (debe arrojar un error)
  try {
    manager.addProduct(
      "producto prueba 2",
      "Este es otro producto prueba",
      150,
      "Sin imagen",
      "abc123",
      10
    );
  } catch (error) {
    console.log(error.message); // El código del producto ya está en uso
  }
  
  // Llamar al método getProductById para buscar el producto por ID
  try {
    const product = manager.getProductById("7b0714de-98f5-4d88-a119-3e6d45a2b0e1");
    console.log(product);
    // {
    //   id: '7b0714de-98f5-4d88-a119-3e6d45a2b0e1',
    //   title: 'producto prueba',
    //   description: 'Este es un producto prueba',
    //   price: 200,
    //   thumbnail: 'Sin imagen',
    //   code: 'abc123',
    //   stock: 25
    // }
  } catch (error) {
    console.log(error.message); // No se encontró el producto con el ID
  }
  