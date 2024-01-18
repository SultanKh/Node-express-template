
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();


// Create a SavedCart
const createSavedCart = async ({ customerId, ProductVariants }) => {
    try {
      const savedCart = await prisma.savedCart.create({
        data: {
          customerId,
          ProductVariants,
        },
      });
      return savedCart;
    } catch (error) {
      throw new Error('Error creating SavedCart');
    }
  };
  
  // Get all SavedCarts
  const getAllSavedCarts = async () => {
    try {
      const savedCarts = await prisma.savedCart.findMany();
      return savedCarts;
    } catch (error) {
      throw new Error('Error getting SavedCarts');
    }
  };
  
  // Get a specific SavedCart by ID
  const getSavedCartById = async (id) => {
    try {
      const savedCart = await prisma.savedCart.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!savedCart) {
        throw new Error('SavedCart not found');
      }
  
      return savedCart;
    } catch (error) {
      throw new Error('Error getting SavedCart by ID');
    }
  };
  

  const updateSavedCart = async (id, { customerId, ProductVariants }) => {
    try {
      const updatedSavedCart = await prisma.savedCart.update({
        where: { id: parseInt(id) },
        data: {
          customerId,
          ProductVariants,
        },
      });
  
      return updatedSavedCart;
    } catch (error) {
      throw new Error('Error updating SavedCart');
    }
  };

  const deleteSavedCart = async (id) => {
    try {
      const deletedSavedCart = await prisma.savedCart.delete({
        where: { id: parseInt(id) },
      });
  
      return deletedSavedCart;
    } catch (error) {
      throw new Error('Error deleting SavedCart');
    }
  };
  
  module.exports = {
    createSavedCart,
    getAllSavedCarts,
    getSavedCartById,
    updateSavedCart,
    deleteSavedCart,
  };