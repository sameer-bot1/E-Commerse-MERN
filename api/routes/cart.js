const Cart = require("../models/Cart");
const { varifyToken, varifyTokenAndAuthorization, varifyTokenAndAdmin } = require("./varifyToken");

const router = require("express").Router();

//CREATE

router.post("/",varifyToken ,async (req,res)=>{
  const newCart = new Cart (req.body)

  try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart); 
  } catch (err) { 
    res.status(500).json(err);
    
  }
})

// UPDATE 

router.put("/:id",varifyTokenAndAuthorization ,async (req,res)=>{ 
    try{
            const updatedCart = await Cart.findByIdAndUpdate(
                req.params.id,
                {
                $set: req.body,
                },
            {  new:true  }
            );
            res.status(200).json(updatedCart);
    }   catch(err){
        res.status(500).json(err);
    }
});

//DELETE METHOD

router.delete("/:id", varifyTokenAndAuthorization, async (req,res)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been Deleted...")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER Cart

router.get("/find/:userId",varifyTokenAndAuthorization, async (req,res)=>{
    try {
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL 

router.get("/",varifyTokenAndAdmin,async(req,res)=>{
    try {
        const carts = await Cart.find()
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;